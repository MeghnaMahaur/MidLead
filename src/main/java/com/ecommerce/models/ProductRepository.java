package com.ecommerce.models;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long>{

	static void saveAll(Product product) {
		
	}

}
