/* ==========================================================================
   Durga Furniture E-Commerce State Engine & Logic
   ========================================================================== */
// Initial Mock Product Catalog Database
let products = [
  {
    id: "steel-01",
    category: "Steel Furniture",
    title: "Durga Imperial Steel Almirah",
    price: 24999,
    originalPrice: 29999,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "A heavy-duty premium steel almirah featuring a digital safety locker, high-gloss powder coated royal finish, adjustable shelving, and a dual-key secure locking mechanism. Built for luxury bedrooms.",
    rating: 4.9,
    reviews: 142,
    materials: "Cold-rolled structural steel, double powder coated, brass handles.",
    dimensions: "78\" H x 36\" W x 22\" D",
    warranty: "10 Years Manufacturing Warranty",
    status: "In Stock"
  },
  {
    id: "wood-01",
    category: "Wooden Furniture",
    title: "Heritage Teak Wood Sofa Set (3+1+1)",
    price: 68500,
    originalPrice: 79999,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "Exquisitely carved by Coimbatore master craftsmen from premium grade-A solid Teak Wood. Features high-density foam cushions upholstered in premium golden velvet fabric.",
    rating: 4.8,
    reviews: 98,
    materials: "Solid Teak Wood, 40-density PU Foam, Premium Boucle Velvet fabric.",
    dimensions: "Sofa: 34\" H x 76\" W x 32\" D | Chairs: 34\" H x 32\" W x 32\" D",
    warranty: "5 Years Wood & Joinery Warranty",
    status: "In Stock"
  },
  {
    id: "wood-02",
    category: "Wooden Furniture",
    title: "Royal Teak Dining Set (6-Seater)",
    price: 54999,
    originalPrice: 62500,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    desc: "A stunning six-seater solid teak wood dining table accompanied by 6 cushioned, gold-accented dining chairs. Features an elegant wood grain veneer top coat.",
    rating: 4.9,
    reviews: 76,
    materials: "Teak Wood, Gold leafing details, stain-resistant premium upholstery.",
    dimensions: "Table: 30\" H x 72\" W x 36\" D | Chairs: 38\" H x 18\" W x 18\" D",
    warranty: "5 Years Structural Warranty",
    status: "In Stock"
  },
  {
    id: "other-01",
    category: "Other Furniture",
    title: "AeroComfort Ergonomic Office Chair",
    price: 9500,
    originalPrice: 12500,
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    desc: "High-back modern ergonomic desk chair featuring adaptive lumbar support, 3D armrests, breathable high-tensile mesh fabric, and a multi-angle tilt lock system.",
    rating: 4.7,
    reviews: 215,
    materials: "Nylon fiberglass frame, breathable Korean mesh, polished steel base.",
    dimensions: "48\" H x 26\" W x 24\" D (Adjustable)",
    warranty: "3 Years Gas Lift & Mechanism Warranty",
    status: "In Stock"
  },
  {
    id: "steel-02",
    category: "Steel Furniture",
    title: "ErgoSteel Executive Teak-Veneer Desk",
    price: 14500,
    originalPrice: 18000,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80", // Reuse high-res image
    desc: "Minimalist industrial executive study table combining a heavy steel frame with a solid teak veneer desk surface. Includes integrated cable management drawer.",
    rating: 4.6,
    reviews: 54,
    materials: "Powder-coated carbon steel, Teak veneer MDF core.",
    dimensions: "30\" H x 60\" W x 30\" D",
    warranty: "2 Years Frame Warranty",
    status: "In Stock"
  },
  {
    id: "steel-03",
    category: "Steel Furniture",
    title: "Durga Heavy-Duty 4-Drawer File Cabinet",
    price: 11999,
    originalPrice: 14999,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Fire-resistant office organizer cabinet with four deep drawers fitted with high-quality telescoping ball-bearing slides. Dual central locking system.",
    rating: 4.8,
    reviews: 32,
    materials: "1.2mm Gauge cold-rolled steel, anti-rust chemical treatment.",
    dimensions: "52\" H x 18\" W x 28\" D",
    warranty: "5 Years Slide Mechanism Warranty",
    status: "In Stock"
  },
  {
    id: "wood-03",
    category: "Wooden Furniture",
    title: "Imperial Teak King Bed with Hydraulic Lift",
    price: 48000,
    originalPrice: 55000,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "A solid teak wood king-size bed with a luxury padded velvet headboard and high-capacity hydraulic storage system underneath. Seamless modern design.",
    rating: 4.9,
    reviews: 64,
    materials: "Teak Wood, Plywood storage base, Velvet headboard fabric.",
    dimensions: "Headboard: 48\" H | Bedframe: 78\" W x 84\" L",
    warranty: "5 Years Wood and Hydraulic Lift Warranty",
    status: "In Stock"
  },
  {
    id: "wood-04",
    category: "Wooden Furniture",
    title: "Classic Teak Wood 4-Door Wardrobe",
    price: 59999,
    originalPrice: 69999,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Traditional solid teak wood wardrobe featuring four expansive doors, built-in dresser mirror, multiple hanging rods, and integrated drawers with soft-close hinges.",
    rating: 4.8,
    reviews: 41,
    materials: "Grade-A Solid Teak Wood, brass handles, safety glass mirror.",
    dimensions: "78\" H x 72\" W x 22\" D",
    warranty: "5 Years Wood Seasoning Warranty",
    status: "In Stock"
  },
  {
    id: "other-02",
    category: "Other Furniture",
    title: "Orion Gold Glass Coffee Table",
    price: 8200,
    originalPrice: 10500,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    desc: "An eye-catching living room accent table with a thick tempered glass top supported by a geometric gold-plated stainless steel base. Perfect for modern spaces.",
    rating: 4.5,
    reviews: 89,
    materials: "10mm Tempered glass, electroplated gold stainless steel.",
    dimensions: "18\" H x 36\" Diameter",
    warranty: "1 Year Structural Warranty",
    status: "In Stock"
  },
  {
    id: "other-03",
    category: "Other Furniture",
    title: "Luxor Boucle Cream Accent Chair",
    price: 16500,
    originalPrice: 21000,
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    desc: "A premium designer accent lounge chair upholstered in luxurious cream boucle fabric. Solid wood internal frame with soft structural curves.",
    rating: 4.7,
    reviews: 37,
    materials: "Cream boucle fabric, high resilience foam, ash wood base legs.",
    dimensions: "32\" H x 30\" W x 32\" D",
    warranty: "3 Years Foam & Frame Warranty",
    status: "In Stock"
  },
  {
    id: "steel-04",
    category: "Steel Furniture",
    title: "Arcus Modular Steel Wardrobe",
    price: 21999,
    originalPrice: 25999,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Durable steel wardrobe with modular interiors, reinforced corners, and a quiet close hinge mechanism for premium home organization.",
    rating: 4.7,
    reviews: 89,
    materials: "CNC cut steel, anti-corrosion coating, soft-close hinges.",
    dimensions: "74\" H x 60\" W x 22\" D",
    warranty: "6 Years Structural Warranty",
    status: "In Stock"
  },
  {
    id: "wood-05",
    category: "Wooden Furniture",
    title: "Maharaja Teak Display Cabinet",
    price: 42999,
    originalPrice: 51000,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "A majestic display cabinet with glass-paneled doors, hidden lighting, and carved teak wood details.",
    rating: 4.8,
    reviews: 63,
    materials: "Solid teak, crystal glass shelving, brass fittings.",
    dimensions: "84\" H x 48\" W x 18\" D",
    warranty: "5 Years Finish Warranty",
    status: "In Stock"
  },
  {
    id: "other-04",
    category: "Other Furniture",
    title: "Sierra Leather Executive Chair",
    price: 13250,
    originalPrice: 16500,
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    desc: "Executive swivel chair in premium leather with adjustable lumbar support and 360° mobility.",
    rating: 4.6,
    reviews: 104,
    materials: "PU leather, chrome-plated steel frame, memory foam padding.",
    dimensions: "46\" H x 28\" W x 28\" D",
    warranty: "3 Years Mechanism Warranty",
    status: "In Stock"
  },
  {
    id: "wood-06",
    category: "Wooden Furniture",
    title: "Banyan Handcrafted Solid Wood Coffee Table",
    price: 17500,
    originalPrice: 21000,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    desc: "Elegant coffee table carved from single-block hardwood featuring a matte finish and precision joinery.",
    rating: 4.8,
    reviews: 54,
    materials: "Solid hardwood, natural oil finish.",
    dimensions: "16\" H x 48\" W x 24\" D",
    warranty: "4 Years Craftsmanship Warranty",
    status: "In Stock"
  },
  {
    id: "steel-05",
    category: "Steel Furniture",
    title: "Titanium Lounge Sofa Frame",
    price: 29999,
    originalPrice: 35999,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Modern lounge sofa frame built from reinforced steel with an angular minimalist profile.",
    rating: 4.7,
    reviews: 72,
    materials: "Powder-coated steel, welded precision joints.",
    dimensions: "32\" H x 90\" W x 38\" D",
    warranty: "5 Years Frame Warranty",
    status: "In Stock"
  },
  {
    id: "wood-07",
    category: "Wooden Furniture",
    title: "Cypress Solid Wood Study Desk",
    price: 23500,
    originalPrice: 27999,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "Minimalist study desk with hidden cable channel and premium cypress wood finish.",
    rating: 4.6,
    reviews: 48,
    materials: "Cypress wood, natural lacquer.",
    dimensions: "30\" H x 60\" W x 28\" D",
    warranty: "4 Years Wood Warranty",
    status: "In Stock"
  },
  {
    id: "other-05",
    category: "Other Furniture",
    title: "Nova Accent Side Table",
    price: 5200,
    originalPrice: 6500,
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    desc: "Compact side table with a matte metal base and premium glass top for contemporary spaces.",
    rating: 4.5,
    reviews: 28,
    materials: "Tempered glass, powder-coated steel.",
    dimensions: "20\" H x 18\" W x 18\" D",
    warranty: "2 Years Structural Warranty",
    status: "In Stock"
  },
  {
    id: "steel-06",
    category: "Steel Furniture",
    title: "Metro Powder-Coated Shoe Rack",
    price: 6299,
    originalPrice: 7600,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Space-saving shoe rack with four tiers, anti-slip inserts, and rust-resistant powder coating.",
    rating: 4.6,
    reviews: 55,
    materials: "Cold-rolled steel, anti-rust powder coating.",
    dimensions: "42\" H x 30\" W x 12\" D",
    warranty: "3 Years Finish Warranty",
    status: "In Stock"
  },
  {
    id: "wood-08",
    category: "Wooden Furniture",
    title: "Lotus Solid Wood Console Table",
    price: 18999,
    originalPrice: 22000,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "A designer console table with a sculpted solid wood base and premium veneer top.",
    rating: 4.7,
    reviews: 67,
    materials: "Solid hardwood, designer veneer.",
    dimensions: "32\" H x 48\" W x 16\" D",
    warranty: "4 Years Craftsmanship Warranty",
    status: "In Stock"
  },
  {
    id: "other-06",
    category: "Other Furniture",
    title: "Luna Floating Wall Shelf",
    price: 3400,
    originalPrice: 4200,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    desc: "Stylish floating shelf with concealed brackets designed for modern media walls and decor displays.",
    rating: 4.4,
    reviews: 19,
    materials: "Engineered wood, hidden metal supports.",
    dimensions: "6\" H x 48\" W x 10\" D",
    warranty: "2 Years Hardware Warranty",
    status: "In Stock"
  },
  {
    id: "steel-07",
    category: "Steel Furniture",
    title: "Vanguard Industrial Workbench",
    price: 32999,
    originalPrice: 38999,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Heavy-duty workbench featuring a reinforced steel frame, timber top, and integrated tool rails.",
    rating: 4.8,
    reviews: 71,
    materials: "Structural steel, hardwood top.",
    dimensions: "36\" H x 72\" W x 30\" D",
    warranty: "5 Years Load Warranty",
    status: "In Stock"
  },
  {
    id: "wood-09",
    category: "Wooden Furniture",
    title: "Elysian Farmhouse Dining Bench",
    price: 12999,
    originalPrice: 15800,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "A rustic farmhouse bench with a solid wood seat and turned leg details for warm dining spaces.",
    rating: 4.6,
    reviews: 44,
    materials: "Solid pine, lacquer finish.",
    dimensions: "18\" H x 60\" W x 16\" D",
    warranty: "4 Years Wood Warranty",
    status: "In Stock"
  },
  {
    id: "other-07",
    category: "Other Furniture",
    title: "Quartz LED Dressing Mirror",
    price: 7200,
    originalPrice: 9200,
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    desc: "Full-height dressing mirror with built-in warm LED lighting and storage shelf.",
    rating: 4.7,
    reviews: 29,
    materials: "Tempered glass, aluminum frame.",
    dimensions: "65\" H x 24\" W x 3\" D",
    warranty: "2 Years Lighting Warranty",
    status: "In Stock"
  },
  {
    id: "steel-08",
    category: "Steel Furniture",
    title: "Axis Metal Shoe Organizer",
    price: 7999,
    originalPrice: 9500,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Sleek shoe organizer with a ventilated metal frame and easy-access open shelving.",
    rating: 4.5,
    reviews: 38,
    materials: "Steel tubing, powder-coated finish.",
    dimensions: "42\" H x 36\" W x 12\" D",
    warranty: "3 Years Finish Warranty",
    status: "In Stock"
  },
  {
    id: "wood-10",
    category: "Wooden Furniture",
    title: "Nova Studio Bookshelf",
    price: 21500,
    originalPrice: 25500,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "Open bookshelf with adjustable teak wood shelving designed for studio spaces and premium interiors.",
    rating: 4.8,
    reviews: 58,
    materials: "Teak plywood, solid wood legs.",
    dimensions: "72\" H x 36\" W x 14\" D",
    warranty: "4 Years Wood Warranty",
    status: "In Stock"
  },
  {
    id: "other-08",
    category: "Other Furniture",
    title: "Harbor Round Dining Table",
    price: 18999,
    originalPrice: 22500,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    desc: "Compact round dining table with a tempered glass top and powder-coated steel base.",
    rating: 4.6,
    reviews: 46,
    materials: "Tempered glass, steel base.",
    dimensions: "30\" H x 42\" Diameter",
    warranty: "3 Years Load Warranty",
    status: "In Stock"
  },
  {
    id: "steel-09",
    category: "Steel Furniture",
    title: "Pulse Decorative Steel Console",
    price: 13999,
    originalPrice: 16500,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Contemporary steel console table with a brushed metal finish and sculptural frame.",
    rating: 4.7,
    reviews: 52,
    materials: "Brushed steel, welded joints.",
    dimensions: "32\" H x 50\" W x 14\" D",
    warranty: "4 Years Frame Warranty",
    status: "In Stock"
  },
  {
    id: "wood-11",
    category: "Wooden Furniture",
    title: "Orchid Solid Wood Nightstand",
    price: 9400,
    originalPrice: 11400,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "A compact nightstand with dovetail drawers and a smooth hardwood finish.",
    rating: 4.5,
    reviews: 26,
    materials: "Solid wood, soft-close drawer slides.",
    dimensions: "24\" H x 18\" W x 16\" D",
    warranty: "4 Years Wood Warranty",
    status: "In Stock"
  },
  {
    id: "other-09",
    category: "Other Furniture",
    title: "Glow Orb Table Lamp",
    price: 4200,
    originalPrice: 5200,
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    desc: "Minimalist orb table lamp with a frosted glass globe and metal base.",
    rating: 4.6,
    reviews: 31,
    materials: "Frosted glass, powder-coated metal.",
    dimensions: "18\" H x 8\" Diameter",
    warranty: "2 Years Electrical Warranty",
    status: "In Stock"
  },
  {
    id: "steel-10",
    category: "Steel Furniture",
    title: "Apollo Wall-Mounted Shelving",
    price: 8499,
    originalPrice: 10400,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Stylish wall-mounted shelving with multiple steel brackets for efficient storage.",
    rating: 4.5,
    reviews: 34,
    materials: "Steel, welded brackets.",
    dimensions: "60\" W x 12\" D",
    warranty: "4 Years Mount Warranty",
    status: "In Stock"
  },
  {
    id: "wood-12",
    category: "Wooden Furniture",
    title: "Behram Walnut Media Console",
    price: 25999,
    originalPrice: 30500,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "Low-profile walnut media console with sliding doors and concealed cable management.",
    rating: 4.8,
    reviews: 72,
    materials: "Walnut veneer, solid wood frame.",
    dimensions: "20\" H x 72\" W x 16\" D",
    warranty: "5 Years Finish Warranty",
    status: "In Stock"
  },
  {
    id: "other-10",
    category: "Other Furniture",
    title: "Horizon Outdoor Patio Chair",
    price: 11500,
    originalPrice: 13900,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    desc: "Weather-resistant patio lounge chair with ergonomic polyester cushions and powder-coated steel.",
    rating: 4.5,
    reviews: 77,
    materials: "Steel, outdoor fabric.",
    dimensions: "32\" H x 30\" W x 32\" D",
    warranty: "2 Years Outdoor Warranty",
    status: "In Stock"
  },
  {
    id: "wood-13",
    category: "Wooden Furniture",
    title: "Serene Teak Vanity Table",
    price: 27800,
    originalPrice: 32999,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "Elegant vanity table with a built-in mirror and soft-close drawer compartments.",
    rating: 4.7,
    reviews: 56,
    materials: "Teak wood, brass accents.",
    dimensions: "30\" H x 42\" W x 18\" D",
    warranty: "5 Years Wood Warranty",
    status: "In Stock"
  },
  {
    id: "steel-11",
    category: "Steel Furniture",
    title: "Vector Industrial Bench",
    price: 12999,
    originalPrice: 15800,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Robust industrial bench with a steel frame and upholstered seat for modern loft interiors.",
    rating: 4.6,
    reviews: 69,
    materials: "Steel, high-density foam.",
    dimensions: "18\" H x 60\" W x 18\" D",
    warranty: "4 Years Frame Warranty",
    status: "In Stock"
  },
  {
    id: "other-11",
    category: "Other Furniture",
    title: "Eclipse Floor Lamp",
    price: 6300,
    originalPrice: 8000,
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    desc: "Contemporary floor lamp with adjustable height and a matte black finish.",
    rating: 4.5,
    reviews: 43,
    materials: "Metal alloy, fabric shade.",
    dimensions: "58\" H x 12\" Diameter",
    warranty: "2 Years Electrical Warranty",
    status: "In Stock"
  },
  {
    id: "wood-14",
    category: "Wooden Furniture",
    title: "Harvest Rustic Kitchen Island",
    price: 44500,
    originalPrice: 52500,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "A functional kitchen island with butcher block top, storage drawers, and open shelving.",
    rating: 4.8,
    reviews: 79,
    materials: "Solid wood, reinforced joinery.",
    dimensions: "36\" H x 60\" W x 30\" D",
    warranty: "5 Years Wood Warranty",
    status: "In Stock"
  },
  {
    id: "steel-12",
    category: "Steel Furniture",
    title: "Nova Steel Wall Shelf",
    price: 7299,
    originalPrice: 8900,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Wall shelf system with adjustable steel brackets for living rooms and studios.",
    rating: 4.4,
    reviews: 27,
    materials: "Powder coated steel, wood laminate shelf.",
    dimensions: "48\" W x 12\" D",
    warranty: "3 Years Mount Warranty",
    status: "In Stock"
  },
  {
    id: "other-12",
    category: "Other Furniture",
    title: "Aura Ceramic Planter Stand",
    price: 3800,
    originalPrice: 4900,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    desc: "Minimal planter stand with a ceramic pot and wooden tripod base.",
    rating: 4.6,
    reviews: 31,
    materials: "Ceramic, solid wood.",
    dimensions: "24\" H x 14\" Diameter",
    warranty: "2 Years Material Warranty",
    status: "In Stock"
  },
  {
    id: "wood-15",
    category: "Wooden Furniture",
    title: "Dynasty Carved Study Chair",
    price: 9800,
    originalPrice: 11800,
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    desc: "Premium solid wood study chair with carved backrest and upholstered seat pad.",
    rating: 4.7,
    reviews: 54,
    materials: "Solid wood, fabric upholstery.",
    dimensions: "38\" H x 22\" W x 24\" D",
    warranty: "4 Years Wood Warranty",
    status: "In Stock"
  },
  {
    id: "other-13",
    category: "Other Furniture",
    title: "Aurora Velvet Lounge Pouf",
    price: 6700,
    originalPrice: 8300,
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    desc: "Plush velvet lounge pouf with piped detailing and premium foam core for relaxed seating.",
    rating: 4.7,
    reviews: 29,
    materials: "Velvet upholstery, high-density foam.",
    dimensions: "18\" H x 24\" Diameter",
    warranty: "2 Years Upholstery Warranty",
    status: "In Stock"
  },
  {
    id: "steel-13",
    category: "Steel Furniture",
    title: "Nova Slimline Storage Console",
    price: 13999,
    originalPrice: 16500,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    desc: "Slimline steel console with matte black finish and open shelving for hallway or living spaces.",
    rating: 4.6,
    reviews: 36,
    materials: "Powder-coated steel, engineered wood shelves.",
    dimensions: "32\" H x 56\" W x 12\" D",
    warranty: "3 Years Structural Warranty",
    status: "In Stock"
  }
];
// App State Management
let appState = {
  currentView: 'home',
  wishlist: JSON.parse(localStorage.getItem('durga_wishlist')) || [],
  selectedProductId: null,
  enquiryLog: JSON.parse(localStorage.getItem('durga_enquiries')) || [
    { id: 1, product: "Durga Imperial Steel Almirah", time: "2026-06-28 10:15", medium: "WhatsApp" },
    { id: 2, product: "Heritage Teak Wood Sofa Set", time: "2026-06-28 11:45", medium: "Call" }
  ],
  filters: {
    search: '',
    categories: [],
    priceMax: 80000,
    sort: 'popular'
  }
};
// Initialize Application once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initFigmaCanvas();
  initNavigation();
  initListingFilters();
  initDetailsPageInteractions();
  initAdminDashboard();
  renderFeaturedProducts();
  updateWishlistBadge();
  routeTo('home');
});
// ==========================================================================
// FIGMA CANVAS EMULATOR CONTROLS
// ==========================================================================
function initFigmaCanvas() {
  const figmaWorkspace = document.getElementById('figma-workspace');
  const emulatorContainer = document.getElementById('emulator-container');
  const viewButtons = document.querySelectorAll('.figma-btn[data-viewport]');
  const fullscreenToggle = document.getElementById('figma-fullscreen-toggle');
  const exitFullscreenFloating = document.getElementById('exit-fullscreen-btn');
  const websiteAppWrapper = document.getElementById('website-app-wrapper');

  if (!emulatorContainer || !websiteAppWrapper) {
    return;
  }

  // Change Viewports
  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      viewButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const viewport = btn.getAttribute('data-viewport');
      
      // Reset classes
      emulatorContainer.className = 'emulator-container';
      websiteAppWrapper.className = 'durga-website-app';
      if (viewport === 'desktop') {
        emulatorContainer.style.width = '1440px';
        websiteAppWrapper.classList.add('simulated-desktop');
      } else if (viewport === 'tablet') {
        emulatorContainer.style.width = '768px';
        emulatorContainer.classList.add('tablet-bezel');
        websiteAppWrapper.classList.add('simulated-tablet');
      } else if (viewport === 'mobile') {
        emulatorContainer.style.width = '390px';
        emulatorContainer.classList.add('mobile-bezel');
        websiteAppWrapper.classList.add('simulated-mobile');
      }
    });
  });

  if (fullscreenToggle && exitFullscreenFloating && figmaWorkspace) {
    // Full Screen Preview Toggle
    fullscreenToggle.addEventListener('click', () => {
      figmaWorkspace.classList.add('fullscreen-mode');
      exitFullscreenFloating.style.display = 'flex';
      // Clear bezel sizing constraints to fill native viewport
      emulatorContainer.className = 'emulator-container';
      websiteAppWrapper.classList.remove('simulated-desktop', 'simulated-tablet', 'simulated-mobile');
      emulatorContainer.style.width = '100%';
    });

    exitFullscreenFloating.addEventListener('click', () => {
      figmaWorkspace.classList.remove('fullscreen-mode');
      exitFullscreenFloating.style.display = 'none';
      
      // Reactivate the active figma viewport button styling
      const activeBtn = document.querySelector('.figma-btn.active[data-viewport]');
      if (activeBtn) {
        activeBtn.click();
      }
    });
  }
}
// ==========================================================================
// NAVIGATION ROUTING
// ==========================================================================
function initNavigation() {
  // Navigation Links
  const navLinks = document.querySelectorAll('[data-route]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      const categoryFilter = link.getAttribute('data-category');
      
      closeMobileMenu();
      if (categoryFilter) {
        // Automatically pre-filter catalog by selected category
        appState.filters.categories = [categoryFilter];
        // Sync filter checkboxes
        syncFilterCheckboxes();
        routeTo('listing');
      } else {
        routeTo(route);
      }
    });
  });
  // Mobile Menu Toggles
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileCloseBtn = document.getElementById('mobile-menu-close');
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavPanel.classList.add('open');
      mobileNavOverlay.classList.add('open');
    });
  }
  if (mobileCloseBtn) {
    mobileCloseBtn.addEventListener('click', closeMobileMenu);
  }
  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', closeMobileMenu);
  }
  // Secret Admin Trigger on brand logos
  const brandLogos = document.querySelectorAll('.brand-logo');
  brandLogos.forEach(logo => {
    logo.addEventListener('click', () => {
      routeTo('admin');
      showToast("Access Granted: Secret Admin Dashboard Loaded");
    });
  });
}
function closeMobileMenu() {
  const mobileNavPanel = document.getElementById('mobile-nav-panel');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  if (mobileNavPanel) mobileNavPanel.classList.remove('open');
  if (mobileNavOverlay) mobileNavOverlay.classList.remove('open');
}
function routeTo(viewName) {
  appState.currentView = viewName;
  // Update navbar active states
  document.querySelectorAll('[data-route]').forEach(link => {
    if (link.getAttribute('data-route') === viewName && !link.getAttribute('data-category')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  // Toggle View Panels
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const activePanel = document.getElementById(`${viewName}-view`);
  if (activePanel) {
    activePanel.classList.add('active');
    // Scroll container back to top
    document.getElementById('emulator-container').scrollTop = 0;
  }
  // Render operations specific to pages
  if (viewName === 'listing') {
    renderCatalog();
  } else if (viewName === 'wishlist') {
    renderWishlist();
  } else if (viewName === 'admin') {
    renderAdminProducts();
    renderAdminStats();
    renderAdminLogs();
  }
}
// ==========================================================================
// HOME PAGE RENDERING
// ==========================================================================
function renderFeaturedProducts() {
  const container = document.getElementById('featured-products-grid');
  if (!container) return;
  // Show first 6 items as featured
  const featured = products.slice(0, 6);
  container.innerHTML = featured.map(prod => getProductCardMarkup(prod)).join('');
  attachCardEvents(container);
}
// Helper to construct Product Card HTML markup
function getProductCardMarkup(product) {
  const isLiked = appState.wishlist.includes(product.id);
  const badgeClass = product.category === 'Steel Furniture' ? 'badge-steel' : (product.category === 'Wooden Furniture' ? 'badge-wooden' : 'badge-other');
  
  return `
    <div class="product-card" data-id="${product.id}" data-detail-id="${product.id}">
      <div class="product-card-img-wrapper">
        <img class="product-card-img" src="${product.img}" alt="${product.title}" onerror="this.src='https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'" />
        <div class="product-card-badge ${badgeClass}">${product.category.split(' ')[0]}</div>
        <button class="wishlist-btn-round ${isLiked ? 'liked' : ''}" data-wishlist-id="${product.id}" aria-label="Add to Wishlist">
          <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
      </div>
      <div class="product-card-info">
        <span class="product-card-category">${product.category}</span>
        <h4 class="product-card-title">${product.title}</h4>
      </div>
    </div>
  `;
}
function attachCardEvents(parentContainer) {
  // Wishlist Button click
  parentContainer.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-wishlist-id');
      toggleWishlist(id, btn);
    });
  });
  // Card click opens details
  parentContainer.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const id = card.getAttribute('data-detail-id');
      if (id) {
        openProductDetails(id);
      }
    });
  });
}
// ==========================================================================
// WISHLIST SYSTEM
// ==========================================================================
function toggleWishlist(productId, buttonElement) {
  const index = appState.wishlist.indexOf(productId);
  let liked = false;
  
  if (index === -1) {
    appState.wishlist.push(productId);
    liked = true;
    showToast("Added to Wishlist");
  } else {
    appState.wishlist.splice(index, 1);
    liked = false;
    showToast("Removed from Wishlist");
  }
  // Persist
  localStorage.setItem('durga_wishlist', JSON.stringify(appState.wishlist));
  updateWishlistBadge();
  // Update card heart buttons icon states dynamically
  document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach(btn => {
    const icon = btn.querySelector('i');
    if (liked) {
      btn.classList.add('liked');
      icon.className = 'fa-solid fa-heart';
    } else {
      btn.classList.remove('liked');
      icon.className = 'fa-regular fa-heart';
    }
  });
  // If on details view, update details action button if active
  const detailsHeartBtn = document.querySelector(`.details-action-circle-btn[data-detail-heart-id="${productId}"]`);
  if (detailsHeartBtn) {
    if (liked) {
      detailsHeartBtn.classList.add('liked');
      detailsHeartBtn.querySelector('i').className = 'fa-solid fa-heart';
    } else {
      detailsHeartBtn.classList.remove('liked');
      detailsHeartBtn.querySelector('i').className = 'fa-regular fa-heart';
    }
  }
  // If currently browsing Wishlist page, re-render it immediately to show items removed
  if (appState.currentView === 'wishlist') {
    renderWishlist();
  }
}
function updateWishlistBadge() {
  const count = appState.wishlist.length;
  document.querySelectorAll('.wishlist-counter-badge').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}
function renderWishlist() {
  const container = document.getElementById('wishlist-grid');
  const emptyState = document.getElementById('wishlist-empty-state');
  if (!container) return;
  const likedProducts = products.filter(p => appState.wishlist.includes(p.id));
  if (likedProducts.length === 0) {
    container.style.display = 'none';
    emptyState.style.display = 'block';
  } else {
    container.style.display = 'grid';
    emptyState.style.display = 'none';
    container.innerHTML = likedProducts.map(prod => getProductCardMarkup(prod)).join('');
    attachCardEvents(container);
  }
}
// ==========================================================================
// PRODUCT LISTING PAGE FILTERS & RENDERING
// ==========================================================================
function initListingFilters() {
  // Real-time Search input
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.filters.search = e.target.value;
      renderCatalog();
    });
  }
  // Sort Dropdown
  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      appState.filters.sort = e.target.value;
      renderCatalog();
    });
  }
  // Category Filter Checkboxes
  const checkboxes = document.querySelectorAll('.category-filter-checkbox');
  checkboxes.forEach(box => {
    box.addEventListener('change', () => {
      const val = box.getAttribute('data-cat-value');
      if (box.checked) {
        appState.filters.categories.push(val);
      } else {
        const index = appState.filters.categories.indexOf(val);
        if (index > -1) appState.filters.categories.splice(index, 1);
      }
      renderCatalog();
    });
  });
}
function syncFilterCheckboxes() {
  const checkboxes = document.querySelectorAll('.category-filter-checkbox');
  checkboxes.forEach(box => {
    const val = box.getAttribute('data-cat-value');
    box.checked = appState.filters.categories.includes(val);
  });
}
function renderCatalog() {
  const container = document.getElementById('catalog-results-grid');
  const resultsCount = document.getElementById('catalog-results-count');
  if (!container) return;
  // 1. Filter products
  let filtered = products.filter(prod => {
    // Search query matches title or desc
    const matchesSearch = prod.title.toLowerCase().includes(appState.filters.search.toLowerCase()) || 
                          prod.desc.toLowerCase().includes(appState.filters.search.toLowerCase());
    
    // Category match
    const matchesCategory = appState.filters.categories.length === 0 || 
                            appState.filters.categories.includes(prod.category);
    
    // Price match
    const matchesPrice = prod.price <= appState.filters.priceMax;
    return matchesSearch && matchesCategory && matchesPrice;
  });
  // 2. Sort results
  if (appState.filters.sort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (appState.filters.sort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (appState.filters.sort === 'popular') {
    filtered.sort((a, b) => b.rating - a.rating); // Sort by rating for popular
  } else {
    // latest / fallback
    filtered.sort((a, b) => b.reviews - a.reviews); 
  }
  // Update counts
  if (resultsCount) {
    resultsCount.textContent = `Showing ${filtered.length} products`;
  }
  // 3. Render
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 38px; margin-bottom: 12px; color: var(--color-primary-gold-light);"></i>
        <p>No products match your active search filters.</p>
      </div>
    `;
  } else {
    container.innerHTML = filtered.map(prod => getProductCardMarkup(prod)).join('');
    attachCardEvents(container);
  }
}
// ==========================================================================
// AMAZON-STYLE PRODUCT DETAILS PAGE
// ==========================================================================
function initDetailsPageInteractions() {
  // Accordion details toggle
  const triggers = document.querySelectorAll('.accordion-trigger');
  triggers.forEach(trig => {
    trig.addEventListener('click', () => {
      const parent = trig.parentElement;
      parent.classList.toggle('active');
      const content = parent.querySelector('.accordion-content');
      if (parent.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });
}
function openProductDetails(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;
  appState.selectedProductId = id;
  // Set text values
  document.getElementById('details-crumb-category').textContent = prod.category;
  document.getElementById('details-crumb-title').textContent = prod.title;
  document.getElementById('details-category-badge').textContent = prod.category;
  document.getElementById('details-title-text').textContent = prod.title;
  document.getElementById('details-reviews-count').textContent = `(${prod.reviews} Customer Reviews)`;
  document.getElementById('details-price-tag').textContent = `₹${prod.price.toLocaleString('en-IN')}`;
  document.getElementById('details-original-price-tag').textContent = `₹${prod.originalPrice.toLocaleString('en-IN')}`;
  document.getElementById('details-description-text').textContent = prod.desc;
  // Specs
  document.getElementById('spec-dimensions').textContent = prod.dimensions;
  document.getElementById('spec-materials').textContent = prod.materials;
  document.getElementById('spec-warranty').textContent = prod.warranty;
  document.getElementById('spec-status').textContent = prod.status;
  // Set images
  const mainImg = document.getElementById('details-main-view-image');
  const zoomOverlay = document.getElementById('details-zoom-overlay');
  
  mainImg.src = prod.img;
  mainImg.onerror = function() { this.src = 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'; };
  
  zoomOverlay.style.backgroundImage = `url('${prod.img}')`;
  // Amazon style Image Zoom logic
  const zoomWrapper = document.getElementById('details-main-image-wrapper');
  zoomWrapper.addEventListener('mousemove', (e) => {
    const rect = zoomWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    zoomOverlay.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  });
  // Heart like button in details
  const detailsHeartBtn = document.getElementById('details-wishlist-heart-btn');
  detailsHeartBtn.setAttribute('data-detail-heart-id', prod.id);
  const isLiked = appState.wishlist.includes(prod.id);
  
  detailsHeartBtn.className = `details-action-circle-btn ${isLiked ? 'liked' : ''}`;
  detailsHeartBtn.querySelector('i').className = `${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart`;
  // Unbind/re-bind click event to prevent duplicates
  const newHeartBtn = detailsHeartBtn.cloneNode(true);
  detailsHeartBtn.parentNode.replaceChild(newHeartBtn, detailsHeartBtn);
  newHeartBtn.addEventListener('click', () => {
    toggleWishlist(prod.id, newHeartBtn);
  });
  // CTA Actions (WhatsApp & Call Loggers)
  const waBtn = document.getElementById('details-whatsapp-cta');
  const callBtn = document.getElementById('details-call-cta');
  const shareBtn = document.getElementById('details-share-cta');
  // WhatsApp Enquiry Link Customization
  const messageText = encodeURIComponent(`Hello Durga Furniture, I am interested in purchasing "${prod.title}" (Price: ₹${prod.price.toLocaleString('en-IN')}) from Coimbatore. Please share details.`);
  waBtn.onclick = () => {
    logEnquiry(prod.title, "WhatsApp");
    window.open(`https://wa.me/919876543210?text=${messageText}`, '_blank');
  };
  callBtn.onclick = () => {
    logEnquiry(prod.title, "Call");
    window.open(`tel:+919876543210`);
    showToast("Opening Phone Dialer...");
  };
  shareBtn.onclick = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Product link copied to clipboard!");
  };
  // Render related products carousel
  renderRelatedProducts(prod.category, prod.id);
  // Switch view
  routeTo('details');
}
function renderRelatedProducts(category, excludeId) {
  const container = document.getElementById('related-products-carousel');
  if (!container) return;
  const related = products.filter(p => p.category === category && p.id !== excludeId).slice(0, 3);
  container.innerHTML = related.map(prod => getProductCardMarkup(prod)).join('');
  attachCardEvents(container);
}
// Log customer enquiry inside Admin State
function logEnquiry(productTitle, medium) {
  const now = new Date();
  const dateStr = now.getFullYear() + '-' + 
                  String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                  String(now.getDate()).padStart(2, '0') + ' ' + 
                  String(now.getHours()).padStart(2, '0') + ':' + 
                  String(now.getMinutes()).padStart(2, '0');
  const newLog = {
    id: appState.enquiryLog.length + 1,
    product: productTitle,
    time: dateStr,
    medium: medium
  };
  appState.enquiryLog.unshift(newLog); // Put new logs at top
  localStorage.setItem('durga_enquiries', JSON.stringify(appState.enquiryLog));
}
// ==========================================================================
// MODAL SYSTEM & QUICK VIEW
// ==========================================================================
function openQuickViewModal(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  const modalBackdrop = document.getElementById('modal-quickview-backdrop');
  const modalBody = document.getElementById('quickview-modal-content');
  if (!modalBackdrop || !modalBody) return;
  modalBody.innerHTML = `
    <div class="quickview-grid">
      <div>
        <img src="${prod.img}" alt="${prod.title}" class="quickview-img" onerror="this.src='https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'">
      </div>
      <div style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <span class="details-category">${prod.category}</span>
          <h3 class="details-title" style="font-size: 20px; margin-top: 4px; margin-bottom: 8px;">${prod.title}</h3>
          <div class="rating-stars" style="margin-bottom: 12px;">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <span style="color: var(--color-text-muted); font-size: 11px; margin-left: 8px;">${prod.rating}</span>
          </div>
          <div class="quickview-price">₹${prod.price.toLocaleString('en-IN')}</div>
          <p style="font-size: 12.5px; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 16px;">${prod.desc}</p>
          <div style="font-size: 11px; margin-bottom: 16px;">
            <div><strong>Dimensions:</strong> ${prod.dimensions}</div>
            <div><strong>Material:</strong> ${prod.materials}</div>
          </div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="btn-gold" style="flex: 1; padding: 10px; font-size: 11px;" id="qv-details-btn">Full Details</button>
          <button class="btn-outline" style="padding: 10px 14px;" id="qv-wishlist-btn">
            <i class="${appState.wishlist.includes(prod.id) ? 'fa-solid' : 'fa-regular'} fa-heart" style="color: #E24C4C;"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  // Bind actions
  document.getElementById('qv-details-btn').onclick = () => {
    closeQuickView();
    openProductDetails(prod.id);
  };
  document.getElementById('qv-wishlist-btn').onclick = () => {
    toggleWishlist(prod.id, document.getElementById('qv-wishlist-btn'));
    closeQuickView();
  };
  modalBackdrop.classList.add('open');
  // Bind Close Events
  document.getElementById('quickview-close-btn').onclick = closeQuickView;
  modalBackdrop.onclick = (e) => {
    if (e.target === modalBackdrop) closeQuickView();
  };
}
function closeQuickView() {
  const modalBackdrop = document.getElementById('modal-quickview-backdrop');
  if (modalBackdrop) modalBackdrop.classList.remove('open');
}
// ==========================================================================
// HIDDEN ADMIN DASHBOARD CRUD SYSTEM
// ==========================================================================
function initAdminDashboard() {
  // Add Product Button triggers modal
  const addBtn = document.getElementById('admin-add-product-btn');
  const modal = document.getElementById('modal-admin-backdrop');
  const closeBtn = document.getElementById('admin-modal-close-btn');
  const cancelBtn = document.getElementById('admin-form-cancel');
  const form = document.getElementById('admin-product-form');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      document.getElementById('admin-modal-title').textContent = 'Add New Product';
      document.getElementById('admin-product-edit-id').value = '';
      form.reset();
      modal.classList.add('open');
    });
  }
  const hideAdminModal = () => {
    modal.classList.remove('open');
  };
  if (closeBtn) closeBtn.addEventListener('click', hideAdminModal);
  if (cancelBtn) cancelBtn.addEventListener('click', hideAdminModal);
  // Form Submit (Save / Edit Product)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const editId = document.getElementById('admin-product-edit-id').value;
      const title = document.getElementById('admin-prod-title').value;
      const category = document.getElementById('admin-prod-category').value;
      const price = parseInt(document.getElementById('admin-prod-price').value);
      const desc = document.getElementById('admin-prod-desc').value;
      const materials = document.getElementById('admin-prod-materials').value;
      const dimensions = document.getElementById('admin-prod-dimensions').value;
      const warranty = document.getElementById('admin-prod-warranty').value;
      const selectImgVal = document.getElementById('admin-prod-img').value;
      let imgPath = "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80";
      if (selectImgVal === 'sofa') imgPath = "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80";
      else if (selectImgVal === 'almirah') imgPath = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80";
      else if (selectImgVal === 'dining') imgPath = "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80";
      else if (selectImgVal === 'chair') imgPath = "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80";
      if (editId) {
        // Edit existing product
        const prod = products.find(p => p.id === editId);
        if (prod) {
          prod.title = title;
          prod.category = category;
          prod.price = price;
          prod.desc = desc;
          prod.materials = materials;
          prod.dimensions = dimensions;
          prod.warranty = warranty;
          prod.img = imgPath;
          showToast("Product updated successfully!");
        }
      } else {
        // Create new product
        const newId = `custom-${Date.now()}`;
        const newProd = {
          id: newId,
          category: category,
          title: title,
          price: price,
          originalPrice: Math.round(price * 1.2),
          img: imgPath,
          desc: desc,
          rating: 5.0,
          reviews: 1,
          materials: materials,
          dimensions: dimensions,
          warranty: warranty,
          status: "In Stock"
        };
        products.unshift(newProd);
        showToast("New product added to catalog!");
      }
      // Refresh listings & statistics
      renderFeaturedProducts();
      renderAdminProducts();
      renderAdminStats();
      hideAdminModal();
    });
  }
}
function renderAdminProducts() {
  const tbody = document.getElementById('admin-products-table-body');
  if (!tbody) return;
  tbody.innerHTML = products.map(prod => `
    <tr>
      <td><img src="${prod.img}" alt="${prod.title}" class="admin-table-img" onerror="this.src='https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'"></td>
      <td><strong>${prod.title}</strong><div style="font-size: 10px; color: var(--color-text-muted);">${prod.id}</div></td>
      <td>${prod.category}</td>
      <td><strong>₹${prod.price.toLocaleString('en-IN')}</strong></td>
      <td>${prod.dimensions}</td>
      <td>
        <button class="admin-action-btn btn-edit-action" onclick="editProductAdmin('${prod.id}')" title="Edit"><i class="fa-solid fa-pen"></i></button>
        <button class="admin-action-btn btn-delete-action" onclick="deleteProductAdmin('${prod.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}
// Global functions exposed for admin actions
window.editProductAdmin = function(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;
  document.getElementById('admin-modal-title').textContent = 'Edit Product Details';
  document.getElementById('admin-product-edit-id').value = prod.id;
  
  document.getElementById('admin-prod-title').value = prod.title;
  document.getElementById('admin-prod-category').value = prod.category;
  document.getElementById('admin-prod-price').value = prod.price;
  document.getElementById('admin-prod-desc').value = prod.desc;
  document.getElementById('admin-prod-materials').value = prod.materials;
  document.getElementById('admin-prod-dimensions').value = prod.dimensions;
  document.getElementById('admin-prod-warranty').value = prod.warranty;
  
  // Set image selector value
  const imgSelect = document.getElementById('admin-prod-img');
  if (prod.img.includes('sofa')) imgSelect.value = 'sofa';
  else if (prod.img.includes('almirah')) imgSelect.value = 'almirah';
  else if (prod.img.includes('dining')) imgSelect.value = 'dining';
  else if (prod.img.includes('chair')) imgSelect.value = 'chair';
  document.getElementById('modal-admin-backdrop').classList.add('open');
};
window.deleteProductAdmin = function(id) {
  if (confirm("Are you sure you want to remove this product from Durga Furniture's catalog?")) {
    products = products.filter(p => p.id !== id);
    
    // Remove from wishlist too if liked
    const wlIndex = appState.wishlist.indexOf(id);
    if (wlIndex > -1) {
      appState.wishlist.splice(wlIndex, 1);
      localStorage.setItem('durga_wishlist', JSON.stringify(appState.wishlist));
      updateWishlistBadge();
    }
    showToast("Product deleted successfully");
    renderFeaturedProducts();
    renderAdminProducts();
    renderAdminStats();
  }
};
function renderAdminStats() {
  // Total Catalog size
  document.getElementById('admin-stat-catalog-size').textContent = products.length;
  // Total Wishlisted items count
  document.getElementById('admin-stat-wishlists-count').textContent = appState.wishlist.length;
  // Total Enquiries
  document.getElementById('admin-stat-enquiries-count').textContent = appState.enquiryLog.length;
  // Popular category (count occurrences)
  let counts = {};
  products.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  
  let topCat = 'None';
  let maxCount = 0;
  for (let cat in counts) {
    if (counts[cat] > maxCount) {
      maxCount = counts[cat];
      topCat = cat.split(' ')[0]; // E.g. Steel or Wooden
    }
  }
  document.getElementById('admin-stat-popular-cat').textContent = topCat;
}
function renderAdminLogs() {
  const tbody = document.getElementById('admin-enquiries-table-body');
  if (!tbody) return;
  tbody.innerHTML = appState.enquiryLog.map(log => `
    <tr>
      <td>#${log.id}</td>
      <td><strong>${log.product}</strong></td>
      <td>${log.time}</td>
      <td><span class="log-medium-badge ${log.medium === 'WhatsApp' ? 'badge-whatsapp' : 'badge-call'}">${log.medium}</span></td>
    </tr>
  `).join('');
}
// ==========================================================================
// TOAST NOTIFICATIONS
// ==========================================================================
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;
  const toastText = document.getElementById('toast-text');
  toastText.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

