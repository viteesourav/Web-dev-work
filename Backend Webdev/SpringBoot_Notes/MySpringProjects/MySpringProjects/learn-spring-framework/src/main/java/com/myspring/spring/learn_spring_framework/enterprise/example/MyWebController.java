package com.myspring.spring.learn_spring_framework.enterprise.example;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MyWebController {

    @Autowired
    private BusinessService businessService;

    public long getValueFRomBusinessService() {
        return businessService.calculateSum();
    }
}

@Component
class BusinessService {

    // NOTE: Following constructor based Dependency Injection.
    @Autowired
    private DataService dataService;
    
    public BusinessService(DataService dataService) {
        super();
        this.dataService = dataService;
    }
    

    public long calculateSum() {
        List<Integer> data =  dataService.getData();
        return data.stream().reduce(Integer::sum).get();
    }

}

@Component
class DataService {
    public List<Integer> getData() {
        return Arrays.asList(10, 20, 30, 40);
    }
}