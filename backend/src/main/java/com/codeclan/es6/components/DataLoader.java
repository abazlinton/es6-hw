package com.codeclan.es6.components;

import com.codeclan.es6.repositories.FeatureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.codeclan.es6.models.Feature;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    FeatureRepository featureRepository;

    public void run(ApplicationArguments args){
        Feature feature = new Feature();

        this.featureRepository.save(feature);
        feature = new Feature();
        this.featureRepository.save(feature);
        feature = new Feature();
        this.featureRepository.save(feature);
        feature = new Feature();
        this.featureRepository.save(feature);
        feature = new Feature();
        this.featureRepository.save(feature);
        feature = new Feature();
        this.featureRepository.save(feature);

    }
}
