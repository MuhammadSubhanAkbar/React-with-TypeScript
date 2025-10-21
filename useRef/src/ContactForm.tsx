import {type FormEvent, useState} from 'react';

// Define TypeScript types for the form data
type ContactFormData = {
    name: string;
    email: string;
    message: string;
    subject: string;
};

const ContactForm = () => {
    // Typed state with TypeScript
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    // Form handling function with proper typing
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Submit handler with proper typing
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '', subject: '' }); // Reset form
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Thank You!</h2>
                <p>Your message has been sent successfully.</p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    style={{ padding: '10px 20px', marginTop: '10px' }}
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <h2>Contact Us</h2>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
                    Name: *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '8px', fontSize: '16px' }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                    Email: *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '8px', fontSize: '16px' }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px' }}>
                    Subject: *
                </label>
                <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{ width: '100%', padding: '8px', fontSize: '16px' }}
                >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
                    Message: *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    style={{ width: '100%', padding: '8px', fontSize: '16px', resize: 'vertical' }}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: isSubmitting ? '#6c757d' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    width: '100%'
                }}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

export default ContactForm;