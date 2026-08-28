# The Oracle to PostgreSQL Shift: Navigating the Transition in Commercial Products

## Introduction

In the landscape of database technologies, Oracle has long stood as the colossus, embodying
the pinnacle of performance, reliability, and comprehensive support. Known for its robustness,
Oracle's database solutions have been the backbone of enterprise environments, securing its
place through advanced features and super-reliable support services.
However, this dominance comes at a price, quite literally, with licensing costs that could
significantly dent an organization's budget. Historically, this was a non-issue for giants in
banking, telecom, and fintech companies, where Oracle's hefty price tag could be passed down
to customers under the guise of premium support.
Nevertheless, the game started to change in the last couple of years when PostgreSQL
professional support steadily grew to various forms of support through its community and thirdparty vendors. These services include 24/7 technical assistance, consulting, training, and
customized development, which are essential for enterprise use. This was a key point for the
“whale” companies to accept the PostgreSQL database as a comprehensive alternative. 

## Price comparison

When comparing the licensing and operational costs of Oracle and PostgreSQL, it's essential to
consider various factors, including licensing fees, support costs, hardware requirements, and
additional expenses for features or scalability. Below are estimative tables that outline potential
costs associated with both databases under different scenarios. 

Licensing and Initial Setup Costs (based on the official price list as of March 1, 2024)
Cost Component
Oracle (Example
Configuration) PostgreSQL (Example Configuration)
Database
Licensing Fees
$47,500 per CPU core
(Enterprise Edition) $0 (Open Source)
Support and
Updates
$10,450 per CPU core/year
(22% of licensing fee)
Professional support options vary; estimated
$3,000/year for comprehensive coverage
Initial Setup and
Configuration
$5,000 (estimated, can vary
greatly)
$2,000 (estimated, due to open-source nature and
community resources)
Total Initial Cost $62,950 per CPU core
(excluding hardware)
$5,000 (excluding hardware, assuming
professional support)
Annual Operating Costs (based on the official price list as of March 1, 2024):
Cost Component Oracle PostgreSQL
Ongoing Support and
Updates $10,450 per CPU core/year $3,000/year for comprehensive coverage
Additional Features
(e.g., Advanced
Security)
$7,000 per feature/year
(estimated)
$0 to $1,000 per feature/year (many features
are included or lower cost due to open-source)
Scalability Costs (e.g.,
adding more cores)
$47,500 per additional CPU core
+ support costs
Primarily hardware costs; no additional
licensing fees
Total Annual
Operating Cost
$17,450 per CPU core +
additional features and
scalability costs
$3,000 + minimal costs for additional
features and scalability
Diving into the numbers, Oracle's licensing scheme presents a complex web of costs tailored to
various use cases, scalability options, and support levels. These costs can quickly escalate,
particularly for large-scale deployments requiring high performance and availability.
On the flip side, PostgreSQL's open-source nature significantly lowers the barrier to entry from a
financial perspective. Even when accounting for professional support, as outlined on
PostgreSQL's official support page, the total cost of ownership often undercuts Oracle, making it
an attractive proposition for cost-conscious businesses.

## Feature comparison

There was a different concept in design taken originally for both competitors:
- Oracle is known as monolithic, with tightly integrated components
- Postgres is known as modular, supports extensions and custom development
Oracle's monolithic design offers robustness and deep integration, while PostgreSQL's
modularity provides flexibility and customization options. From our point of view, the Oracle
RDBMS approach ensures tightly integrated functionalities that are out of the box and suited for
enterprises requiring comprehensive solutions with minimal customization.
Conversely, PostgreSQL's architecture encourages innovation and adaptability, allowing users
to extend the database's capabilities with plug-ins and custom features. It is ideal for various
applications, from web services to complex data processing tasks. This distinction is crucial for
organizations deciding between the two databases, as it affects not only the current capabilities
but also the long-term scalability and flexibility of their data management infrastructure.
Feature-wise, the gap between Oracle and PostgreSQL has been narrowing. It's becoming
increasingly evident that PostgreSQL is a comprehensive competitor to Oracle today. This
statement is backed by several factors that highlight PostgreSQL's capabilities and its
increasing adoption across industries.

## Cloud support

Over the last few years, both Oracle and PostgreSQL have indeed intensified their focus on
cloud solutions, recognizing the cloud's central role in modern data management and
application deployment strategies. This shift reflects broader industry trends towards cloudnative architectures, scalability, and as-a-service models.
Oracle Cloud Support
Oracle Cloud Infrastructure (OCI):
- Oracle offers seamless integration with its own cloud platform, OCI, which
provides optimized performance and advanced features unique to Oracle
databases.
- Oracle databases on OCI can leverage Oracle’s Autonomous Database services,
offering self-driving, self-securing, and self-repairing database functionalities.
This significantly reduces management overhead and enhances security and
efficiency.
Third-Party Cloud Platforms:
- Oracle databases can run on other major cloud platforms like AWS (Amazon
RDS, Amazon EC2), Microsoft Azure, and Google Cloud Platform (GCP), though
without the full range of features and optimizations available on OCI.
- Oracle maintains partnerships with these cloud providers to ensure compatibility
and support, but users may face additional considerations related to licensing,
performance optimization, and feature availability.
PostgreSQL Cloud Support
Managed PostgreSQL Services:
- PostgreSQL enjoys broad support across all major cloud platforms through
managed services: Amazon RDS and Aurora PostgreSQL on AWS, Azure
Database for PostgreSQL on Microsoft Azure, and Cloud SQL for PostgreSQL
on GCP.
- These managed services offer easy setup, automatic backups, scalability, and
high availability configurations, making PostgreSQL an attractive option for cloud
deployments.
Comparison and Impact
- Oracle's cloud strategy is characterized by a top-down approach. Significant investments
are made in proprietary cloud infrastructure and advanced managed services like the
Autonomous Database. These offerings are integrated into Oracle's ecosystem,
providing a seamless path for existing customers to migrate to the cloud.
- PostgreSQL's cloud journey is more community-driven and decentralized, with wide
support across multiple cloud platforms via managed services. This flexibility, combined
with the open-source model, makes PostgreSQL highly adaptable and cost-effective for
various cloud deployment scenarios.

## Migration Tools

With the increasing trend of migrating from Oracle to PostgreSQL, the landscape of database
migration tools has evolved. Today's market presents a diverse array of tools designed to
address specific challenges and requirements:
- Cloud-Oriented Migration Solutions: All major cloud vendors, including AWS, GCP,
and Azure, now offer comprehensive cloud-oriented migration solutions. They are best
when the migration destination is within the same cloud provider or from on-premise to
the target cloud provider.
- Oracle PL/SQL Compatibility Layers: One of the most significant barriers to migration
has been the complexity of migrating Oracle-specific PL/SQL code to PostgreSQL.
Recognizing this, several commercial solutions now offer additional modules atop
PostgreSQL, emulating Oracle's PL/SQL environment within PostgreSQL. This
innovation significantly reduces the need for extensive code rewrites, preserving the
integrity and functionality of legacy applications while transitioning to a more open and
flexible database system.
- Open-Source Tools: The open-source community has contributed robust tools like
Ora2Pg, simplifying the daunting task of schema and data conversion. These tools
automate the conversion process, translating Oracle data types, schemas, stored
procedures, and more into PostgreSQL-compatible formats.

## Real-World examples

As Dev, QA, and Architecture, we have been involved in multiple enterprise projects in the
banking, telecom, and trading sectors. We have observed the customers switching from Oracle
to Postgres, driven by the compelling cost advantages and feature parity. These migrations
often involve overcoming challenges related to data migration, application compatibility, and
retraining staff.
However, the outcomes typically showcase significant cost savings, improved flexibility, and a
boost in innovation, underscoring PostgreSQL's viability as a primary database solution.
- Large Financial Services Company. Faced with spiraling costs and a desire to
innovate faster, this company transitioned its core banking system to PostgreSQL. The
move, while initially driven by cost concerns, resulted in improved system performance
and faster deployment of new features.
- Global E-Commerce Retailer. Seeking to reduce costs and improve scalability for its
transactional database systems, this retailer migrated from Oracle to PostgreSQL. The
migration was complex but ultimately successful, leading to significant cost savings and
enhanced flexibility in handling peak loads.
- Government Agency. Motivated by the need for cost savings and a strategic initiative to
adopt open-source technologies, this agency moved its public-facing databases to
PostgreSQL. Despite challenges with data migration and training, the agency benefited
from reduced licensing costs and an increased pace of digital service improvements.
These case studies highlight the diverse motivations and outcomes for enterprises moving from
Oracle to PostgreSQL. While the transition comes with challenges, the long-term benefits of
reduced costs, enhanced flexibility, and improved performance often justify the effort.

## Future Projections

Looking ahead, the database technology competition between Oracle and PostgreSQL
continues to evolve. What we can see here:
- PostgreSQL is well-positioned to benefit from these trends. Offering a flexible and costeffective solution and now backed with professional 24/7 support, it’s marking a pivotal
shift in enterprise adoption.
- Conversely, Oracle is expected to respond to these market dynamics through strategic
pricing adjustments, enhanced feature offerings, and potential partnerships, aiming to
preserve its market position in the face of mounting competition.
Being Oracle fans for the last 20+ years (since Oracle 8.1.6 was released about January 2000),
we still consider it a “golden standard” for all databases. However, we must also acknowledge
that Oracle's pricing is often seen as prohibitively expensive. To remain competitive in the
evolving market, Oracle must consider strategic pricing adjustments that align more closely with
current market expectations and the value propositions of alternatives like PostgreSQL.