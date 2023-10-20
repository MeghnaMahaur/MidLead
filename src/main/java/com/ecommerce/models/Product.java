package com.ecommerce.models;

import java.math.BigDecimal; 

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Product {
//	Fields of the Database
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="image_url")
	private String imageUrl;
    private String productName;
    private String content;
    @Column(name="actual_price")
    private BigDecimal actualPrice;
    private BigDecimal price;
      
//    Getter Methods
    public Long getId() {
        return id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String getProductName() {
        return productName;
    }

    public String getContent() {
        return content;
    }

    public BigDecimal getActualPrice() {
        return actualPrice;
    }

    public BigDecimal getPrice() {
        return price;
    }

	/*
	 * public Long getQuantity() { return quantity; }
	 * 
	 * public BigDecimal getTotal() { return total; }
	 */
//    Setter Methods
    public void setId(Long id) {
        this.id = id;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setActualPrice(BigDecimal actualPrice) {
        this.actualPrice = actualPrice;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

	/*
	 * public void setQuantity(Long quantity) { this.quantity = quantity; }
	 * 
	 * public void setTotal(BigDecimal total) { this.total = total; }
	 */
}
