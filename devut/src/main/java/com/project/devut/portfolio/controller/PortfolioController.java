package com.project.devut.portfolio.controller;

import com.project.devut.portfolio.entity.PortfolioInfo;
import com.project.devut.portfolio.repository.PortfolioInfoRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/portfolio")
@Slf4j
public class PortfolioController {

    private final PortfolioInfoRepo portfolioInfoRepo;

    @GetMapping("/{portfolioId}")
    public PortfolioInfo getPortfolio(@PathVariable Long portfolioId){
        return portfolioInfoRepo.findById(portfolioId).orElse(null);
    }

    @PostMapping("/{portfolioId}/save")
    public PortfolioInfo savePortfolio(@PathVariable Long portfolioId, @RequestBody PortfolioInfo portfolioInfo){
        log.info("save portfolio : {}", portfolioInfo.toString());
        return portfolioInfoRepo.save(portfolioInfo);
    }

}
