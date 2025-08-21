// Enhanced sample data with proper structure
        let shipments = {
            'SH001': {
                id: 'SH001',
                product: 'Electronics Package - Gaming Laptops',
                category: 'Electronics',
                weight: 15.5,
                priority: 'Express',
                insurance: 25000,
                origin: 'Shanghai, China',
                destination: 'New York, USA',
                events: [
                    {
                        date: '2025-08-02 14:30',
                        location: 'Shanghai Pudong Port',
                        details: 'Arrived at international shipping port. Awaiting container loading on MSC Harmony vessel.',
                        status: 'processing',
                        temperature: 24
                    },
                    {
                        date: '2025-08-03 08:15',
                        location: 'Pacific Ocean - Vessel MSC Harmony',
                        details: 'Departed Shanghai Port. Estimated 14-day transit across Pacific Ocean.',
                        status: 'in-transit',
                        temperature: 23
                    },
                    {
                        date: '2025-08-06 16:45',
                        location: 'Los Angeles Port Terminal',
                        details: 'Vessel arrived at Los Angeles Port. Container unloaded and proceeding to customs.',
                        status: 'processing',
                        temperature: 26
                    },
                    {
                        date: '2025-08-07 11:20',
                        location: 'LA Distribution Hub - FedEx',
                        details: 'Customs cleared successfully. Package transferred to domestic shipping network.',
                        status: 'in-transit',
                        temperature: 25
                    },
                    {
                        date: '2025-08-08 19:30',
                        location: 'Chicago Sorting Facility',
                        details: 'Package arrived at central sorting hub. Processing for final delivery route.',
                        status: 'in-transit',
                        temperature: 21
                    }
                ]
            },
            'SH002': {
                id: 'SH002',
                product: 'Medical Equipment - MRI Scanner Components',
                category: 'Medical Equipment',
                weight: 850.2,
                priority: 'Critical',
                insurance: 2500000,
                origin: 'Munich, Germany',
                destination: 'Toronto, Canada',
                events: [
                    {
                        date: '2025-08-05 10:00',
                        location: 'Munich Medical Manufacturing',
                        details: 'Sensitive medical equipment collected from certified facility. Special handling protocols applied.',
                        status: 'processing',
                        temperature: 18
                    },
                    {
                        date: '2025-08-05 18:30',
                        location: 'Frankfurt International Airport',
                        details: 'Arrived at cargo terminal. Equipment secured in climate-controlled container.',
                        status: 'processing',
                        temperature: 19
                    },
                    {
                        date: '2025-08-06 02:15',
                        location: 'Lufthansa Flight LH441',
                        details: 'Departed Frankfurt on specialized cargo aircraft with medical equipment certification.',
                        status: 'in-transit',
                        temperature: 16
                    },
                    {
                        date: '2025-08-06 09:45',
                        location: 'Toronto Pearson International',
                        details: 'Aircraft landed safely. Medical equipment cleared through priority customs channel.',
                        status: 'processing',
                        temperature: 20
                    },
                    {
                        date: '2025-08-07 14:20',
                        location: 'Toronto General Hospital',
                        details: 'Equipment successfully delivered and signed for by medical facility director.',
                        status: 'delivered',
                        temperature: 21
                    }
                ]
            },
            'SH003': {
                id: 'SH003',
                product: 'Automotive Parts - Engine Components',
                category: 'Automotive Parts',
                weight: 245.8,
                priority: 'Standard',
                insurance: 45000,
                origin: 'Detroit, USA',
                destination: 'São Paulo, Brazil',
                events: [
                    {
                        date: '2025-08-04 07:30',
                        location: 'Detroit Auto Manufacturing Plant',
                        details: 'Precision engine components collected from Ford manufacturing facility.',
                        status: 'processing',
                        temperature: 22
                    },
                    {
                        date: '2025-08-04 15:45',
                        location: 'Chicago Central Sorting Hub',
                        details: 'Parts consolidated with other automotive shipments for South America route.',
                        status: 'processing',
                        temperature: 24
                    },
                    {
                        date: '2025-08-05 23:10',
                        location: 'Miami International Gateway',
                        details: 'Arrived at South American shipping hub. Awaiting connecting flight.',
                        status: 'processing',
                        temperature: 28
                    },
                    {
                        date: '2025-08-06 05:30',
                        location: 'American Airlines Flight AA963',
                        details: 'Departed Miami on cargo flight to São Paulo. 8-hour flight duration expected.',
                        status: 'in-transit',
                        temperature: 18
                    },
                    {
                        date: '2025-08-08 14:15',
                        location: 'São Paulo Guarulhos Airport',
                        details: 'Flight arrived. Parts cleared through Brazilian customs and transferred to local courier.',
                        status: 'in-transit',
                        temperature: 26
                    }
                ]
            },
            'SH004': {
                id: 'SH004',
                product: 'Fashion Collection - Designer Handbags',
                category: 'Fashion & Apparel',
                weight: 12.3,
                priority: 'Express',
                insurance: 85000,
                origin: 'Milan, Italy',
                destination: 'Beverly Hills, USA',
                events: [
                    {
                        date: '2025-08-07 11:00',
                        location: 'Milan Fashion District',
                        details: 'Luxury handbag collection picked up from designer atelier. Items individually wrapped.',
                        status: 'processing',
                        temperature: 21
                    },
                    {
                        date: '2025-08-07 16:20',
                        location: 'Milan Malpensa Airport',
                        details: 'Fashion items secured in climate-controlled cargo hold. Priority boarding.',
                        status: 'processing',
                        temperature: 20
                    },
                    {
                        date: '2025-08-08 01:45',
                        location: 'Emirates Flight EK92',
                        details: 'Departed Milan via Dubai connection. Premium cargo service selected.',
                        status: 'in-transit',
                        temperature: 18
                    },
                    {
                        date: '2025-08-08 18:30',
                        location: 'Los Angeles International',
                        details: 'Items arrived and cleared customs. Transferred to luxury goods courier service.',
                        status: 'in-transit',
                        temperature: 24
                    }
                ]
            }
        };

        let currentUser = null;
        let selectedRole = 'manufacturer';
        let currentPage = 'home';

        // Navigation and page management
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.textContent.toLowerCase().includes(pageId) || (pageId === 'home' && link.textContent.includes('Home'))) {
                    link.classList.add('active');
                }
            });
            
            currentPage = pageId;
            
            if (pageId === 'home') {
                setTimeout(animateCounters, 500);
            }
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const nav = document.querySelector('.navbar nav');
            nav.classList.toggle('active');
        }

        // Scroll effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Navbar background
            const navbar = document.getElementById('navbar');
            if (scrolled > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Progress indicator
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolledPercent = (winScroll / height) * 100;
            document.getElementById("scrollIndicator").style.width = scrolledPercent + "%";
            
            // Animate sections on scroll
            const sections = document.querySelectorAll('.section, .feature-card, .timeline-item');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrolled > (sectionTop - window.innerHeight + sectionHeight/3)) {
                    section.classList.add('visible');
                }
            });
        });

        // Counter animation
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number[data-target]');
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        if (target % 1 !== 0) {
                            counter.textContent = current.toFixed(1);
                        } else {
                            counter.textContent = Math.ceil(current).toLocaleString();
                        }
                        setTimeout(updateCounter, 20);
                    } else {
                        if (target % 1 !== 0) {
                            counter.textContent = target.toFixed(1);
                        } else {
                            counter.textContent = target.toLocaleString();
                        }
                    }
                };
                updateCounter();
            });
        }

        // Enhanced tracking functionality
        function trackShipment() {
            const shipmentId = document.getElementById('shipmentId').value.trim().toUpperCase();
            showTrackingResults(shipmentId);
        }

        function quickTrack(shipmentId) {
            document.getElementById('shipmentId').value = shipmentId;
            showTrackingResults(shipmentId);
        }

        function showTrackingResults(shipmentId) {
            const resultsDiv = document.getElementById('tracking-results');
            
            if (!shipmentId) {
                alert('Please enter a shipment ID');
                return;
            }

            const shipment = shipments[shipmentId];
            
            if (!shipment) {
                resultsDiv.innerHTML = `
                    <div class="error-message">
                        <h3>Shipment Not Found</h3>
                        <p>No shipment found with ID: <strong>${shipmentId}</strong></p>
                        <p>Please verify the tracking number and try again.</p>
                    </div>`;
                resultsDiv.style.display = 'block';
                return;
            }

            let timelineHTML = `
                <div style="background: rgba(255,255,255,0.1); padding: 30px; border-radius: 20px; margin-bottom: 30px; backdrop-filter: blur(15px);">
                    <h3 style="text-align: center; margin-bottom: 20px; font-size: 1.8rem; color: #e0e7ff;">
                        📦 ${shipmentId} - Tracking Details
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: center;">
                        <div>
                            <div style="font-weight: 600; color: #4f46e5; margin-bottom: 5px;">Product</div>
                            <div>${shipment.product}</div>
                        </div>
                        <div>
                            <div style="font-weight: 600; color: #4f46e5; margin-bottom: 5px;">Weight</div>
                            <div>${shipment.weight} kg</div>
                        </div>
                        <div>
                            <div style="font-weight: 600; color: #4f46e5; margin-bottom: 5px;">Priority</div>
                            <div>${shipment.priority}</div>
                        </div>
                        <div>
                            <div style="font-weight: 600; color: #4f46e5; margin-bottom: 5px;">Route</div>
                            <div>${shipment.origin} → ${shipment.destination}</div>
                        </div>
                    </div>
                </div>
                <h3 style="text-align: center; margin-bottom: 30px; font-size: 1.5rem;">📍 Shipment Journey</h3>
            `;

            shipment.events.forEach((event, index) => {
                const isLast = index === shipment.events.length - 1;
                timelineHTML += `
                    <div class="timeline-item" style="animation: slideInLeft 0.6s ease ${index * 0.15}s forwards;">
                        <div class="timeline-dot${isLast ? ' pulse' : ''}"></div>
                        <div class="timeline-content">
                            <div class="timeline-date">📅 ${event.date}</div>
                            <div class="timeline-location">📍 ${event.location}</div>
                            <div class="timeline-details">${event.details}</div>
                            <div style="display: flex; gap: 10px; align-items: center; margin-top: 10px;">
                                <div class="status-badge status-${event.status}">${event.status.toUpperCase().replace('-', ' ')}</div>
                                ${event.temperature ? `<div style="background: rgba(59, 130, 246, 0.2); padding: 4px 10px; border-radius: 15px; font-size: 0.8rem;">🌡️ ${event.temperature}°C</div>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            });

            resultsDiv.innerHTML = timelineHTML;
            resultsDiv.style.display = 'block';
            
            // Smooth scroll to results
            setTimeout(() => {
                resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        // Advanced tracking features
        function scanBarcode() {
            alert('📱 Barcode scanner would be activated here.\nThis feature would use device camera to scan tracking codes.');
        }

        function trackMultiple() {
            const ids = prompt('Enter multiple shipment IDs separated by commas:');
            if (ids) {
                const shipmentIds = ids.split(',').map(id => id.trim().toUpperCase());
                let results = '<h3>Bulk Tracking Results:</h3>';
                
                shipmentIds.forEach(id => {
                    if (shipments[id]) {
                        const lastEvent = shipments[id].events[shipments[id].events.length - 1];
                        results += `
                            <div style="background: rgba(255,255,255,0.1); padding: 15px; margin: 10px 0; border-radius: 10px;">
                                <strong>${id}</strong> - ${lastEvent.location} 
                                <span class="status-badge status-${lastEvent.status}">${lastEvent.status}</span>
                            </div>
                        `;
                    } else {
                        results += `<div style="background: rgba(239, 68, 68, 0.2); padding: 15px; margin: 10px 0; border-radius: 10px;">${id} - Not Found</div>`;
                    }
                });
                
                document.getElementById('tracking-results').innerHTML = results;
                document.getElementById('tracking-results').style.display = 'block';
            }
        }

        // Role selection
        function selectRole(role) {
            selectedRole = role;
            document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }

        // Authentication
        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageDiv = document.getElementById('login-message');
            
            if (username === 'admin' && password === 'password') {
                currentUser = { role: selectedRole, username: username };
                showPage('dashboard');
                
                document.getElementById('user-role').textContent = `${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)} Portal`;
                
                // Show appropriate tabs based on role
                const createTab = document.getElementById('createTab');
                const updateTab = document.getElementById('updateTab');
                
                if (selectedRole === 'manufacturer') {
                    createTab.style.display = 'block';
                    updateTab.style.display = 'none';
                    createTab.textContent = '➕ Create Shipment';
                } else if (selectedRole === 'logistics') {
                    createTab.style.display = 'none';
                    updateTab.style.display = 'block';
                } else if (selectedRole === 'admin') {
                    createTab.style.display = 'block';
                    updateTab.style.display = 'block';
                    createTab.textContent = '➕ Create';
                }
                
                messageDiv.innerHTML = '';
                updateDashboardStats();
            } else {
                messageDiv.innerHTML = '<div class="error-message">❌ Invalid credentials. Use <strong>admin/password</strong></div>';
            }
        }

        function logout() {
            currentUser = null;
            showPage('home');
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('login-message').innerHTML = '';
        }

        // Dashboard functionality
        function showTab(tabId) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
            
            event.target.classList.add('active');
            document.getElementById(tabId + '-tab').style.display = 'block';
        }

        function updateDashboardStats() {
            const totalShipments = Object.keys(shipments).length;
            const activeShipments = Object.values(shipments).filter(s => {
                const lastEvent = s.events[s.events.length - 1];
                return lastEvent.status !== 'delivered';
            }).length;
            const deliveredShipments = totalShipments - activeShipments;
            
            document.getElementById('totalShipments').textContent = totalShipments;
            document.getElementById('activeShipments').textContent = activeShipments;
            document.getElementById('deliveredShipments').textContent = deliveredShipments;
        }

        // Shipment creation
        function createShipment() {
            const id = document.getElementById('new-shipment-id').value.trim().toUpperCase() || `SH${String(Object.keys(shipments).length + 1).padStart(3, '0')}`;
            const product = document.getElementById('product-name').value.trim();
            const category = document.getElementById('product-category').value;
            const weight = parseFloat(document.getElementById('product-weight').value) || 0;
            const origin = document.getElementById('origin').value.trim();
            const destination = document.getElementById('destination').value.trim();
            const priority = document.getElementById('priority').value;
            const insurance = parseFloat(document.getElementById('insurance').value) || 0;
            const messageDiv = document.getElementById('dashboard-message');
            
            if (!product || !origin || !destination) {
                messageDiv.innerHTML = '<div class="error-message">❌ Please fill in required fields: Product, Origin, and Destination</div>';
                return;
            }
            
            if (shipments[id]) {
                messageDiv.innerHTML = '<div class="error-message">❌ Shipment ID already exists. Please use a different ID.</div>';
                return;
            }
            
            shipments[id] = {
                id: id,
                product: product,
                category: category,
                weight: weight,
                priority: priority,
                insurance: insurance,
                origin: origin,
                destination: destination,
                events: [{
                    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
                    location: origin,
                    details: `📦 Shipment created: ${product}. Ready for pickup.`,
                    status: 'processing',
                    temperature: 22
                }]
            };
            
            messageDiv.innerHTML = `<div class="success-message">✅ Shipment <strong>${id}</strong> created successfully!</div>`;
            
            // Clear form
            document.getElementById('new-shipment-id').value = '';
            document.getElementById('product-name').value = '';
            document.getElementById('product-weight').value = '';
            document.getElementById('origin').value = '';
            document.getElementById('destination').value = '';
            document.getElementById('insurance').value = '';
            
            updateDashboardStats();
        }

        // Shipment updates
        function updateShipment() {
            const id = document.getElementById('update-shipment-id').value.trim().toUpperCase();
            const location = document.getElementById('current-location').value.trim();
            const details = document.getElementById('status-details').value.trim();
            const statusType = document.getElementById('status-type').value;
            const temperature = document.getElementById('temperature').value;
            const messageDiv = document.getElementById('dashboard-message');
            
            if (!id || !location || !details) {
                messageDiv.innerHTML = '<div class="error-message">❌ Please fill in Shipment ID, Location, and Details</div>';
                return;
            }
            
            if (!shipments[id]) {
                messageDiv.innerHTML = '<div class="error-message">❌ Shipment not found. Please check the ID.</div>';
                return;
            }
            
            const newEvent = {
                date: new Date().toISOString().slice(0, 16).replace('T', ' '),
                location: location,
                details: details,
                status: statusType,
                temperature: temperature ? parseInt(temperature) : undefined
            };
            
            shipments[id].events.push(newEvent);
            
            messageDiv.innerHTML = `<div class="success-message">✅ Shipment <strong>${id}</strong> updated successfully!</div>`;
            
            // Clear form
            document.getElementById('update-shipment-id').value = '';
            document.getElementById('current-location').value = '';
            document.getElementById('next-location').value = '';
            document.getElementById('status-details').value = '';
            document.getElementById('temperature').value = '';
            
            updateDashboardStats();
        }

        // Initialize app
        window.addEventListener('load', function() {
            document.getElementById('shipmentId').focus();
            setTimeout(animateCounters, 1000);
            
            // Trigger scroll event to show visible sections
            window.dispatchEvent(new Event('scroll'));
        });

        // Enter key shortcuts
        document.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                if (currentPage === 'tracking' && document.getElementById('shipmentId') === document.activeElement) {
                    trackShipment();
                } else if (currentPage === 'login' && (document.getElementById('username') === document.activeElement || document.getElementById('password') === document.activeElement)) {
                    login();
                }
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const navbar = document.querySelector('.navbar');
            const nav = document.querySelector('.navbar nav');
            const menuBtn = document.querySelector('.mobile-menu-btn');
            
            if (!navbar.contains(event.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });