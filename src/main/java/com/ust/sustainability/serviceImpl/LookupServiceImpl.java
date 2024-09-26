package com.ust.sustainability.serviceImpl;

import com.ust.sustainability.model.Lookup;
import com.ust.sustainability.repository.LookupRepository;
import com.ust.sustainability.service.LookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LookupServiceImpl implements LookupService {

    @Autowired
    private LookupRepository lookupRepository;

    @Override
    public List<Lookup> getAllLookups() {
        return lookupRepository.findAll();
    }
}
