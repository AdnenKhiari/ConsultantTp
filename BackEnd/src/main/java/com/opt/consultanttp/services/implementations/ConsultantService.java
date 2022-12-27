package com.opt.consultanttp.services.implementations;

import com.opt.consultanttp.models.consultants.Consultant;
import com.opt.consultanttp.models.consultants.ConsultantSearchOptions;
import com.opt.consultanttp.repositories.ConsultantRepository;
import com.opt.consultanttp.services.interfaces.ConsultantServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConsultantService implements ConsultantServiceInterface {

    @Autowired
    ConsultantRepository consultantRepository;

    @Override
    public List<Consultant> allConsultants(ConsultantSearchOptions s)
    {
        return consultantRepository.findAll();
    }

    @Override
    public Consultant getConsultantById(String id) throws Exception {
        Optional<Consultant> c= consultantRepository.findById(id);
        if(c.isEmpty()) {
            throw new Exception("Invalid Id");
        }
        return c.get();
    }

    @Override
    public Consultant removeConsultantById(String id) throws Exception {
        Consultant c = this.getConsultantById(id);
        consultantRepository.deleteById(id);
        return c;
    }

    @Override
    public Consultant updateConsultantById(String Id,Consultant s) throws Exception {
        boolean c = consultantRepository.existsById(Id);
        if(!c)
            throw new Exception("Invalid Id , cannot Update");
        s.setId(Id);
        return consultantRepository.save(s);
    }

    @Override
    public Consultant addConsultant(Consultant s) {
        return consultantRepository.save(s);
    }

}
