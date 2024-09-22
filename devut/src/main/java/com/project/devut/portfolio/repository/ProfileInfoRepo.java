package com.project.devut.portfolio.repository;

import com.project.devut.portfolio.entity.ProfileInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileInfoRepo extends JpaRepository<ProfileInfo, Long> {
}
