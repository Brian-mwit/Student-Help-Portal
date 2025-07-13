// Personal Information Configuration
const personalInfo = {
  name: "Brian Mwita",
  email: "brianmwita117@gmail.com",
  whatsappNumber: "+16469332990",
  whatsappLink: "https://wa.me/16469332990",
  currentYear: new Date().getFullYear()
};

const App = () => {
    const [contactForm, setContactForm] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [loginForm, setLoginForm] = React.useState({
        school: '',
        username: '',
        password: '',
        assignment: ''
    });
    
    const [activeTab, setActiveTab] = React.useState('contact');
    
    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactForm(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginForm(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleContactSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${contactForm.name}! Your message has been submitted. I'll get back to you soon.`);
        setContactForm({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert(`Login details received for ${loginForm.school}. I'll contact you shortly to assist with your assignment.`);
        setLoginForm({
            school: '',
            username: '',
            password: '',
            assignment: ''
        });
    };
    
    return (
        <div className="app">
            {/* Header */}
            <header>
                <div className="container">
                    <nav className="navbar">
                        <div className="logo">StudentHelp</div>
                        <ul className="nav-links">
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#login">Login Help</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Struggling with School Work?</h1>
                        <p>Get professional help with your assignments, projects, and coursework from an experienced tutor.</p>
                        <div className="hero-buttons">
                            <a href="#contact" className="btn">Get Help Now</a>
                            <a href={personalInfo.whatsappLink} className="btn btn-whatsapp">
                                <i className="fab fa-whatsapp"></i> WhatsApp Me
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Student studying" />
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section id="services" className="services">
                <div className="container">
                    <div className="section-title">
                        <h2>How I Can Help You</h2>
                        <p>Comprehensive academic support tailored to your needs</p>
                    </div>
                    <div className="service-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-book"></i>
                            </div>
                            <h3>Homework Help</h3>
                            <p>Stuck on an assignment? I can help you understand concepts and complete your homework accurately.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <h3>Programming Projects</h3>
                            <p>Need help with coding assignments in Python, Java, JavaScript, or other languages? I've got you covered.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <h3>Math & Statistics</h3>
                            <p>From algebra to calculus to statistical analysis, I can help you master mathematical concepts.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-flask"></i>
                            </div>
                            <h3>Science Subjects</h3>
                            <p>Physics, Chemistry, Biology - get help with lab reports, research papers, and understanding complex topics.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-pen-fancy"></i>
                            </div>
                            <h3>Essay Writing</h3>
                            <p>Struggling with essays? I can help with research, structure, and polishing your writing.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <h3>Test Preparation</h3>
                            <p>Prepare for exams with customized study plans and practice tests tailored to your curriculum.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Contact & Login Help Sections */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Get In Touch</h2>
                        <p>Choose how you'd like to reach out for assistance</p>
                    </div>
                    
                    <div className="tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
                            onClick={() => setActiveTab('contact')}
                        >
                            General Inquiry
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                        >
                            Login Assistance
                        </button>
                    </div>
                    
                    {activeTab === 'contact' ? (
                        <div className="contact-form">
                            <form onSubmit={handleContactSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        value={contactForm.name}
                                        onChange={handleContactChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={contactForm.email}
                                        onChange={handleContactChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        name="subject" 
                                        value={contactForm.subject}
                                        onChange={handleContactChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        value={contactForm.message}
                                        onChange={handleContactChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn">Send Message</button>
                            </form>
                        </div>
                    ) : (
                        <div className="login-form">
                            <form onSubmit={handleLoginSubmit}>
                                <div className="form-group">
                                    <label htmlFor="school">School/Institution</label>
                                    <input 
                                        type="text" 
                                        id="school" 
                                        name="school" 
                                        value={loginForm.school}
                                        onChange={handleLoginChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Student Portal Username</label>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        name="username" 
                                        value={loginForm.username}
                                        onChange={handleLoginChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Student Portal Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        value={loginForm.password}
                                        onChange={handleLoginChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="assignment">Assignment Details</label>
                                    <textarea 
                                        id="assignment" 
                                        name="assignment" 
                                        value={loginForm.assignment}
                                        onChange={handleLoginChange}
                                        placeholder="Describe what help you need with..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="security-note">
                                    <p><strong>Note:</strong> Your login credentials will only be used to access the specific assignment you need help with and will not be stored permanently.</p>
                                </div>
                                <button type="submit" className="btn">Request Help</button>
                            </form>
                        </div>
                    )}
                </div>
            </section>
            
            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h3>About StudentHelp</h3>
                            <p>Providing academic assistance to students at all levels to help them achieve their educational goals.</p>
                        </div>
                        <div className="footer-column">
                            <h3>Quick Links</h3>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                            <a href="#login">Login Help</a>
                        </div>
                        <div className="footer-column">
                            <h3>Contact Info</h3>
                            <p><i className="fas fa-envelope"></i> {personalInfo.email}</p>
                            <p><i className="fas fa-phone"></i> {personalInfo.whatsappNumber}</p>
                            <div className="social-links">
                                <a href={personalInfo.whatsappLink}><i className="fab fa-whatsapp"></i></a>
                                <a href={`mailto:${personalInfo.email}`}><i className="fas fa-envelope"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy; {personalInfo.currentYear} StudentHelp by {personalInfo.name}. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));