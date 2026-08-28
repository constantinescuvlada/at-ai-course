# Our Products

Finance and Trading Markets have several requirements and challenges. They are complex, competitive and mistakes are costly. We provide a set of solutions that can improve the quality of your products and increase confidence in your trading strategies:

# Integrating QA Automation and Performance Testing: A Unified Approach to Modern Software Development

# Overview

In the realm of software testing, Quality Assurance (QA) Automation and Performance (Perf)
testing have traditionally been divided into two distinct teams. This separation comes from their
primary focus areas—functional correctness and system performance under load, respectively.
It continued to be a main direction since the last decades of years until Agile came into play and
discovered many issues with traditional approaches (both technical and resource efficiency).
And eventually a closer examination revealed that there have been significant overlaps in
methodologies and tools used by functional automation and non-functional (performance
testing). This provides a great level of flexibility and an opportunity for integration.
This white paper explores the potential benefits and challenges of merging these teams and
using common scripts for both functional and performance testing.

# Overlapping methodologies and tools

A detailed examination of the tools and methods employed by both QA Automation and
Performance testing reveals substantial overlap, suggesting that much of the groundwork laid
for functional testing can be repurposed for performance testing, and vice versa. This overlap
provides a foundation for integration, where shared resources and tools can lead to greater
efficiency and adaptability in handling testing requirements.
Test automation strategy makes a perfect example, because this is the first step both in functional
and performance testing. For those that were part of both worlds it clear enough that they share
many design steps:

**Frontend and protocol-based testing:**
- Both functional and performance testing involve interactions at the user interface level
and the API level, ensuring that all parts of the application are tested for both the correct
functionality and performance under stress

**Limitations of only doing frontend performance testing:**
- Under the Hood: Frontend testing alone doesn’t provide insights into database
interactions, server-side logic, or other backend processes

**Limitations of only doing protocol-level load testing:**
- User experience: This method typically overlooks the frontend, meaning it doesn’t
capture delays or issues in rendering, which are critical for the user satisfaction.
- Complex scripts: Emulating realistic user flows at the protocol level can require complex
scripting and setup.
- Maintenance challenges: As the application grows and evolves, maintaining these
scripts can become increasingly complex, especially with the introduction of new
features or changes in user flows.
Does that look familiar? Then the obvious question is why not to use the same framework and
approach for both of them.

# Rationale for a unified framework

The idea of merging both testing strategies into a single framework is to leverage the strengths
of each to overcome the other's weaknesses. A unified approach allows for more
comprehensive testing that covers both the internal workings and the user-facing elements of an
application, potentially leading to more robust and reliable software development. Here are the
main benefits:

**Reduced tool fragmentation:**
- Using a single framework can reduce the overhead associated with learning and
integrating multiple tools, leading to faster onboarding and fewer integration
issues.
**Efficiency in test management:**
- Having a single suite that handles both functional and performance tests can
streamline test management and execution, making it easier to schedule tests
and manage test data.
**Consistent user experience testing:**
- By integrating functional and performance tests, teams can ensure that both
aspects are always considered, potentially leading to a more consistent user
experience.
**Cost-Effective:**
- Although there's an initial investment in setting up a robust framework that can
handle both types of testing, in the long run, it could be more cost-effective due
to shared resources and reduced tooling costs.

# Playground tools on the market

There are several tools on the market (free and paid) that offer varying degrees of flexibility for
running tests either as functional checks or under load/stress conditions. They allow you to build
an automation framework that would be used for developing the same test scripts for multiple
purposes. Here is a few of them that we successfully used for multiple customers to build robust
unified frameworks:
● Artillery (https://www.artillery.io/): Supports both load testing and functional testing for
APIs and web applications. Artillery can adapt the same tests for functional or load
testing by adjusting payload, concurrency, and flow.
● K6 (https://k6.io/): With k6's JavaScript execution environment, you can write test scripts
for API functional validations and simulate multiple users or high load scenarios for
performance testing. Scripts can switch between functional and performance testing
modes based on configurations.
● JMeter (https://jmeter.apache.org/): Effective for both performance testing and functional
testing (especially for APIs) with plugins and assertions to validate response correctness
during performance tests.
● Playwright (https://github.com/microsoft/playwright): Primarily used for functional testing
through browser automation, Playwright can also measure client-side performance
metrics such as load, scripting, rendering times, and more. While not traditional for load
or stress testing
