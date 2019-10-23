package com.codeclan.es6.repositories;

import com.codeclan.es6.models.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeatureRepository extends JpaRepository<com.codeclan.es6.models.Feature, Long> {
}
