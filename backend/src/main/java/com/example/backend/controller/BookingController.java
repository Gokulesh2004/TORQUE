package com.example.backend.controller;

import com.example.backend.model.Booking;
import com.example.backend.dto.BookingRequest;
import com.example.backend.service.BookingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:5173") // Adjust if frontend runs on a different port
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    // Create Booking with Event Information
    @PostMapping
    public ResponseEntity<Booking> createBooking(@Valid @RequestBody BookingRequest bookingRequest) {
        Booking booking = new Booking();
        booking.setName(bookingRequest.getName());
        booking.setPhone(bookingRequest.getPhone());
        booking.setEmail(bookingRequest.getEmail());
        booking.setEventId(bookingRequest.getRaceEventId());  // Store the event ID

        Booking savedBooking = bookingService.saveBooking(booking);
        return ResponseEntity.ok(savedBooking);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @Valid @RequestBody Booking bookingDetails) {
        return bookingService.getBookingById(id).map(existingBooking -> {
            // Update the booking details
            existingBooking.setName(bookingDetails.getName());
            existingBooking.setPhone(bookingDetails.getPhone());
            existingBooking.setEmail(bookingDetails.getEmail());
            // Save the updated booking
            Booking updatedBooking = bookingService.saveBooking(existingBooking);
            return ResponseEntity.ok(updatedBooking);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        if (bookingService.getBookingById(id).isPresent()) {
            bookingService.deleteBooking(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}
