package com.myFirstSpring.rest.webservices.restful_web_services.filtering;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;

// Implements Filtering of Properties in the REST API response
@RestController
public class FilteringController {
 
    // static filtering uses -> SomeBean Class 

    @GetMapping("/filteringStatic")
    public SomeBean filteringStatic() {
        return new SomeBean("value1", "value2", "value3");
    }

    // Also ignores the field2 in case of list resp too
    @GetMapping("/filteringListStatic")
    public List<SomeBean> filteringListStatic() {
        return Arrays.asList( 
            new SomeBean("value1", "value2", "value3"),
            new SomeBean("value4", "value5", "value6"),
            new SomeBean("value7", "value8", "value9")
        );
    }



    // Dynamic Filtering uses -> SomeBean1 class [different filtering logic in different API]

    // Optimized the filtering logic
    private MappingJacksonValue addCustomFilters(Object value, String... fieldsToInclude) {
        
        // Logic here to add filter serialization logic to to filter out the data.
        MappingJacksonValue jacksonValue = new MappingJacksonValue(value);
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept(fieldsToInclude);
        FilterProvider filters = new SimpleFilterProvider().addFilter("SomeBeanFilter", filter);
        jacksonValue.setFilters(filters);

        return jacksonValue;
    }

    // Below Method filter out all fields except field 1 and field 3 for the below method.
    @GetMapping("/filteringDynamic")
    public MappingJacksonValue filteringDynamic() {

        SomeBean1 someBean = new SomeBean1("value1", "value2", "value3");

        // // Logic here to add filter serialization logic to to filter out the data.
        // MappingJacksonValue jacksonValue = new MappingJacksonValue(someBean);
        // SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("field1", "field3");
        // FilterProvider filters = new SimpleFilterProvider().addFilter("SomeBeanFilter", filter);
        // jacksonValue.setFilters(filters);

        // return jacksonValue;
        return addCustomFilters(someBean, "field1", "field3");
    }

    // Only returns field2 and filed3 here
    @GetMapping("/filteringListDynamic")
    public MappingJacksonValue filteringListDynamic() {
        List<SomeBean1> asList = Arrays.asList( 
            new SomeBean1("value1", "value2", "value3"),
            new SomeBean1("value4", "value5", "value6"),
            new SomeBean1("value7", "value8", "value9")
        );

        // // Logic here to add filter serialization logic to to filter out the data.
        // MappingJacksonValue jacksonValue = new MappingJacksonValue(asList);

        // SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept("field2", "field3");
        // FilterProvider filters = new SimpleFilterProvider().addFilter("SomeBeanFilter", filter);
        // jacksonValue.setFilters(filters);

        // return jacksonValue;
        return addCustomFilters(asList, "field2", "field3");
    }
}
