"use client";

import React, { useState } from "react";
import "./LandingPage.css"; // We'll define our styles in this CSS file

const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Principal",
      quote:
        "SchoolManage Pro has transformed how we run our school. It's user-friendly and comprehensive.",
    },
    {
      name: "Michael Lee",
      role: "Teacher",
      quote: "The grading and attendance features save me hours each week. Highly recommended!",
    },
    {
      name: "Emily Chen",
      role: "Parent",
      quote:
        "I love how easy it is to stay updated on my child's progress. Great communication tool!",
    },
  ];

  const features = [
    {
      icon: "📚",
      title: "Curriculum Management",
      description: "Easily plan and manage your school's curriculum",
    },
    {
      icon: "👥",
      title: "Student Information System",
      description: "Centralized database for all student information",
    },
    {
      icon: "📅",
      title: "Scheduling & Attendance",
      description: "Effortless class scheduling and attendance tracking",
    },
    {
      icon: "🏆",
      title: "Grade Management",
      description: "Streamlined grading process and report generation",
    },
    {
      icon: "✉️",
      title: "Communication Portal",
      description: "Seamless communication between staff, students, and parents",
    },
    {
      icon: "✅",
      title: "Task Management",
      description: "Assign and track tasks for staff and students",
    },
  ];

  const userBenefits = [
    {
      icon: "👩‍🏫",
      title: "Teachers",
      description: "Simplify grading, attendance, and lesson planning",
    },
    {
      icon: "🧑‍🎓",
      title: "Students",
      description: "Access assignments, grades, and schedules easily",
    },
    {
      icon: "👪",
      title: "Parents",
      description: "Stay informed about your child's progress and school events",
    },
    {
      icon: "👨‍💼",
      title: "Staff",
      description: "Streamline administrative tasks and improve efficiency",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99/month",
      features: ["Core features", "Up to 500 students", "Email support"],
    },
    {
      name: "Pro",
      price: "$199/month",
      features: [
        "All Basic features",
        "Up to 1000 students",
        "Priority support",
        "Advanced analytics",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["All Pro features", "Unlimited students", "24/7 support", "Custom integrations"],
    },
  ];

  const faqs = [
    {
      question: "How secure is my school's data?",
      answer: "We use industry-standard encryption and security measures to protect your data.",
    },
    {
      question: "Can I import data from our current system?",
      answer: "Yes, we offer data migration services to help you transition smoothly.",
    },
    {
      question: "Is training provided?",
      answer:
        "We offer comprehensive training sessions for all users, ensuring a smooth adoption process.",
    },
  ];

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">SchoolManage Pro</div>
          <ul className="nav-links">
            {["Home", "Features", "Pricing", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
            <li>
              <button className="btn btn-primary">Get Started</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Revolutionize Your School Management</h1>
            <p>
              Streamline administration, enhance communication, and boost student success with our
              all-in-one platform.
            </p>
            <button className="btn btn-primary">Start Free Trial</button>
          </div>
          <div className="hero-image">
            <img src="https://via.placeholder.com/500x300" alt="School Management App Demo" />
          </div>
        </div>
      </section>

      {/* User-Specific Benefits */}
      <section className="user-benefits">
        <div className="container">
          <h2>Benefits for Everyone</h2>
          <div className="benefits-grid">
            {userBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>What Our Users Say</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-card">
              <p>{testimonials[activeTestimonial].quote}</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonials[activeTestimonial].name}</p>
                <p className="author-role">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
            <div className="testimonial-nav">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === activeTestimonial ? "active" : ""}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Choose Your Plan</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
                {plan.popular && <div className="popular-tag">Most Popular</div>}
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>📧 info@schoolmanagepro.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Education St, School City, 12345</p>
            </div>
            <form className="contact-form">
              <h3>Send Us a Message</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3>SchoolManage Pro</h3>
              <p>Empowering schools with innovative management solutions.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {["Home", "Features", "Pricing", "Testimonials", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-legal">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Stay updated with our latest features and news.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email" required />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SchoolManage Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
