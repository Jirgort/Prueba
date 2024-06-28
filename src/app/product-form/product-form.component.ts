import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode: boolean = false;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = +params['id'];
        this.productService.getProduct(this.productId).subscribe(product => {
          this.productForm.patchValue(product);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.productService.updateProduct(this.productId!, this.productForm.value).subscribe(() => {
        this.router.navigate(['products']);
      });
    } else {
      
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['products']);
      });
    }
  }
}
