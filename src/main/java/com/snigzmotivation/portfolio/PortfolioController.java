package com.snigzmotivation.portfolio;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin
public class PortfolioController {
    @GetMapping
    public Map<String, Object> profile() {
        return Map.of(
            "name", "Snigzmotivation&Vlogs",
            "tagline", "Stay Motivated. Keep Exploring. Grow Ahead.",
            "about", "Welcome to Snigzmotivation & Vlogs — your space for motivation, positive thoughts, lifestyle vlogs, and everyday inspiration. Join the journey to grow, stay confident, and make every day meaningful.",
            "content", List.of(
                Map.of("title", "SnigzMotivation&Vlogs", "description", "Short inspiration to reset your mindset."),
                Map.of("title", "SnigzWritings", "description", "Routines, stories, and small adventures."),
                Map.of("title", "SnigzPhotographiee", "description", "Simple ideas for confidence and self-belief.")));
    }
}
