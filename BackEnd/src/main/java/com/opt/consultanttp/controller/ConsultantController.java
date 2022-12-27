package com.opt.consultanttp.controller;

import com.opt.consultanttp.models.consultants.Consultant;
import com.opt.consultanttp.models.consultants.ConsultantSearchOptions;
import com.opt.consultanttp.services.interfaces.ConsultantServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consultant")
public class ConsultantController {

    @Autowired
    ConsultantServiceInterface consultantService;
    @PutMapping("/{id}")
    public Consultant updateConsultant(@PathVariable("id") String id,@RequestBody Consultant s) throws Exception {
        Consultant result = null;

        result = consultantService.updateConsultantById(id,s);

        return result;
    }
    @DeleteMapping("/{id}")
    public Consultant deleteConsultant(@PathVariable("id") String id) throws Exception {
        Consultant result = null;
        result = consultantService.removeConsultantById(id);
        return result;
    }
    @GetMapping("/{id}")
    public Consultant getConsultant(@PathVariable("id") String id) throws Exception {
        Consultant result = null;
        result = consultantService.getConsultantById(id);
        return result;
    }
    @GetMapping
    public List<Consultant> allConsultant(){
        List<Consultant> result = consultantService.allConsultants(new ConsultantSearchOptions());
        return result;
    }
    @PostMapping
    public Consultant addConsultant(@RequestBody Consultant s){
            Consultant result = consultantService.addConsultant(s);
            System.out.println(s.toString());
            return result;
    }
}
