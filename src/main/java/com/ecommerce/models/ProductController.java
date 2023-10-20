package com.ecommerce.models;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce.models.Product;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:3000/")
public class ProductController {

	@Autowired
	private ProductService productService;

//<---------------------------------------------------------Get Request---------------------------------------------------------------->
	@GetMapping("/list")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@GetMapping("/cart")
	public List<Product> getCartContents() {
		return null;
	}

//<---------------------------------------------------------Post Request--------------------------------------------------------------->
	@PostMapping("/cart/add")
	public void addToCart(@RequestBody Product product) {
		productService.addProduct(product);
	}

	@PostMapping("/cart/remove/{productId}") // public void removeFromCart(@RequestBody
	public void deleteByProductId(@RequestParam Long productId) { 
		productService.deleteByID(productId);
	}
}