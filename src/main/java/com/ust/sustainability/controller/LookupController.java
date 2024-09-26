package com.ust.sustainability.controller;

import com.ust.sustainability.model.Lookup;
import com.ust.sustainability.service.LookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/lookup")
public class LookupController {

    @Autowired
    private LookupService lookupService;

    @GetMapping
    public List<Lookup> getAllLookups() {
        return lookupService.getAllLookups();
    }
}
