package com.project.devut.portfolio.repository;

import com.project.devut.portfolio.entity.PortfolioInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioInfoRepo extends JpaRepository<PortfolioInfo, Long> {
}
