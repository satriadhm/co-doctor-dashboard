import HeroSection from "@/components/molecules/HeroSection";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import LinkAtom from "@/components/atoms/LinkAtom";
import PublicLayout from "@/components/templates/PublicLayout";

export default function Home() {
  return (
    <PublicLayout>
      <div className="container mx-auto px-4">
        <HeroSection />
        
        {/* Why Co-Doctor Section */}
        <section className="py-12">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              ⭐ Why Co-Doctor?
            </Heading>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  🤖
                </div>
              </div>
              <Heading level={3} className="mb-4">
                Doctor-Level Accuracy
              </Heading>
              <Text className="text-gray-600">
                Trained on over 3,800 clinical notes with expert annotations,
                our model detects critical errors with performance close to real
                physicians.
              </Text>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  ⚡
                </div>
              </div>
              <Heading level={3} className="mb-4">
                Smart Automation, Saved Time
              </Heading>
              <Text className="text-gray-600">
                Correct documentation in seconds. Let our AI handle the
                error-checking so you can focus on your patients.
              </Text>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  🔒
                </div>
              </div>
              <Heading level={3} className="mb-4">
                Built for Privacy and Compliance
              </Heading>
              <Text className="text-gray-600">
                De-identified, encrypted, and regulation-ready. Your patient
                data stays private and secure at every step.
              </Text>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Heading level={2} className="mb-4">
              Ready to Transform Your Clinical Documentation?
            </Heading>
            <Text variant="large" className="mb-8 text-gray-600">
              Join thousands of medical professionals who trust Co-Doctor
            </Text>
            <div className="flex justify-center gap-4">
              <LinkAtom href="/signup">
                <Button variant="primary" size="lg">
                  Get Started Today
                </Button>
              </LinkAtom>
              <LinkAtom href="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </LinkAtom>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
