
import { useState } from "react";
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Trophy, Users, BookOpen, Code, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const skills = {
    "Programming Languages": ["Python", "JavaScript", "C++"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
    "Backend": ["Flask", "Django", "Node.js", "REST APIs"],
    "Database": ["MongoDB", "SQL"],
    "Tools & Platforms": ["Shopify Hydrogen", "Judge.me", "Yotpo", "Git", "GitHub"]
  };

  const projects = [
    {
      title: "Ad Click Prediction ML Model",
      description: "Machine learning model comparing Logistic Regression vs Decision Tree for real-time ad click prediction. Built with Flask & Django backends.",
      tech: ["Python", "Flask", "Django", "Machine Learning", "Scikit-learn"],
      github: "https://github.com/divyanshu-2004",
      featured: true
    },
    {
      title: "eCommerce Solutions",
      description: "Full-stack eCommerce platform built during internship at Devframe Studio with modern UI and third-party integrations.",
      tech: ["Next.js", "Shopify Hydrogen", "Shadcn UI", "Judge.me", "Yotpo"],
      github: "https://github.com/divyanshu-2004",
      featured: true
    },
    {
      title: "DP Weather App",
      description: "Real-time weather application with location-based forecasting and responsive design.",
      tech: ["JavaScript", "React", "Weather API", "Tailwind CSS"],
      github: "https://github.com/divyanshu-2004"
    },
    {
      title: "GitHub Profile Finder",
      description: "Search and explore GitHub profiles with repository details and user statistics.",
      tech: ["React", "GitHub API", "JavaScript", "CSS3"],
      github: "https://github.com/divyanshu-2004"
    },
    {
      title: "Bus Booking System",
      description: "Complete bus reservation system with user authentication and booking management.",
      tech: ["Python", "Django", "SQLite", "Bootstrap"],
      github: "https://github.com/divyanshu-2004"
    }
  ];

  const achievements = [
    {
      title: "GATE 2025 Qualified",
      description: "Score: 26.51",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "LeetCode Expert",
      description: "700+ problems solved, 1700+ rating",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "CodeChef Specialist",
      description: "400+ problems solved",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Published Research",
      description: "ML paper in IJSRCSE 2024",
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Divyanshu Prajapati
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
            DP
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Full-Stack Developer & Problem Solver
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            B.Tech Computer Science Student | GATE 2025 Qualified | 700+ LeetCode Problems Solved | 
            Full-Stack Intern at Devframe Studio | ML Research Published
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              India
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              Available for Opportunities
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="https://github.com/divyanshu-2004" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://linkedin.com/in/divyanshu-prajapati-a6b230250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:divyanshuhprajapati9@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate B.Tech Computer Science student with a strong foundation in competitive programming 
                  and full-stack development. With over 700 LeetCode problems solved and a 1700+ rating, I've honed my 
                  problem-solving skills and algorithmic thinking.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Currently working as a Full-Stack Intern at Devframe Studio, I'm building cutting-edge eCommerce 
                  solutions using modern technologies like Next.js, Shopify Hydrogen, and various third-party integrations. 
                  My experience spans across 15+ personal and academic projects, including machine learning applications.
                </p>
                <p className="text-lg leading-relaxed">
                  As Deputy Secretary of BITWISE Club and Joint Secretary of the ED Cell (Technical Wing), I actively 
                  contribute to the tech community by organizing coding events, workshops, and hackathons. I've also 
                  published research in machine learning, focusing on real-time ad click prediction models.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Full-Stack Developer Intern</span>
                  <Badge>Current</Badge>
                </CardTitle>
                <CardDescription>Devframe Studio</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Building modern eCommerce solutions using Next.js and Shopify Hydrogen</li>
                  <li>Implementing responsive UI components with Shadcn UI and Tailwind CSS</li>
                  <li>Integrating third-party tools like Judge.me for reviews and Yotpo for marketing</li>
                  <li>Collaborating with cross-functional teams to deliver high-quality products</li>
                  <li>Optimizing application performance and user experience</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${project.featured ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    {project.featured && <Badge>Featured</Badge>}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Research & Publications</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Ad Click Prediction: Logistic Regression vs Decision Tree</CardTitle>
                <CardDescription>Published in IJSRCSE 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comparative analysis of machine learning algorithms for predicting advertisement click-through rates 
                  in real-time scenarios. The research explores the performance differences between Logistic Regression 
                  and Decision Tree models, providing insights into their effectiveness for online advertising platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Logistic Regression</Badge>
                  <Badge variant="outline">Decision Trees</Badge>
                  <Badge variant="outline">Ad Tech</Badge>
                  <Badge variant="outline">Python</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership & Activities</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Deputy Secretary - BITWISE Club
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Organized coding competitions and technical workshops</li>
                  <li>Mentored junior students in competitive programming</li>
                  <li>Coordinated hackathons and tech events</li>
                  <li>Built a community of 200+ active members</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Joint Secretary - ED Cell (Technical Wing)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Led technical initiatives and innovation projects</li>
                  <li>Organized entrepreneurship and technology seminars</li>
                  <li>Facilitated industry-academia collaboration</li>
                  <li>Promoted startup culture among students</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="mailto:divyanshuhprajapati9@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://linkedin.com/in/divyanshu-prajapati-a6b230250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://leetcode.com/u/divyanshu-2004/" target="_blank" rel="noopener noreferrer">
                <Code className="h-5 w-5 mr-2" />
                LeetCode
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Divyanshu Prajapati. Built with React, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
