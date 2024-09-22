package com.project.devut.portfolio.controller;

import com.project.devut.portfolio.entity.ProfileInfo;
import com.project.devut.portfolio.repository.ProfileInfoRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileInfoRepo profileInfoRepo;

    @GetMapping("/{portfolioId}")
    public ProfileInfo getProfileInfo(@PathVariable Long portfolioId) {
        return profileInfoRepo.findById(portfolioId).orElse(null);
    }

}