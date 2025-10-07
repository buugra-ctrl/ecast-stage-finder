import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clapperboard, Users, Briefcase } from "lucide-react";

const memberTypes = [
  {
    icon: Clapperboard,
    title: "Casting Directors",
    description: "Post casting calls, review submissions, and discover the perfect talent for your productions.",
    features: [
      "Unlimited casting calls",
      "Advanced search filters",
      "Direct communication with talent",
      "Project management tools",
    ],
  },
  {
    icon: Users,
    title: "Actors",
    description: "Create your professional profile, showcase your work, and apply to exciting opportunities.",
    features: [
      "Professional portfolio",
      "Instant casting notifications",
      "Self-tape submission tools",
      "Career resources and guidance",
    ],
  },
  {
    icon: Briefcase,
    title: "Agents",
    description: "Manage your talent roster, track submissions, and connect with casting opportunities.",
    features: [
      "Multi-client management",
      "Submission tracking",
      "Contract management",
      "Industry networking",
    ],
  },
];

const MemberTypes = () => {
  return (
    <section id="members" className="py-20">
      <div className="container">
        <div className="text-left max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Hemen Üye Ol
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a casting director, actor, or agent, ecast has the perfect membership for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {memberTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemberTypes;
