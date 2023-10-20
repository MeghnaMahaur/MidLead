package com.ecommerce.models;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> getAllProducts(){
		return productRepository.findAll();
	}
	
	public Product addProduct(Product product){
		return productRepository.save(product);
	}
	
	public void deleteByID(Long id){
		 productRepository.deleteById(id);
	}
}
