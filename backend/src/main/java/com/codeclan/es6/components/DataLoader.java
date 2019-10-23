package com.codeclan.es6.components;

import com.codeclan.es6.repositories.FeatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    FeatureRepository featureRepository;

    public void run(ApplicationArguments args){
        com.codeclan.es6.models.Feature feature = new com.codeclan.es6.models.Feature();

        this.featureRepository.save(feature);
        feature = new com.codeclan.es6.models.Feature();
        this.featureRepository.save(feature);
        feature = new com.codeclan.es6.models.Feature();
        this.featureRepository.save(feature);
        feature = new com.codeclan.es6.models.Feature();
        this.featureRepository.save(feature);
        feature = new com.codeclan.es6.models.Feature();
        this.featureRepository.save(feature);
        feature = new com.codeclan.es6.models.Feature();
        this.featureRepository.save(feature);

    }
}
