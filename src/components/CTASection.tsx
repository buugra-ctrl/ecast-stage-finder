import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaJoin from "@/assets/cta-join.jpg";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={ctaJoin}
              alt="Join ecast community"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of industry professionals who are already using ecast to connect, 
              collaborate, and create opportunities in the entertainment industry.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Quick Setup</h3>
                  <p className="text-sm text-muted-foreground">Create your profile in minutes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant Access</h3>
                  <p className="text-sm text-muted-foreground">Start browsing opportunities immediately</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Professional Support</h3>
                  <p className="text-sm text-muted-foreground">Get help from our dedicated team</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join Now
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
