
/**
 * Akalanka Ranasinghe - Advanced Logic Module (Demo)
 * Purpose: Simulating core logic for student grade tracking and performance analytics.
 */

#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

class Student {
public:
    std::string name;
    int currentGrade;
    std::vector<double> scores;

    Student(std::string n, int g) : name(n), currentGrade(g) {}

    void addScore(double s) {
        scores.push_back(s);
    }

    double calculateAverage() {
        if (scores.empty()) return 0.0;
        double sum = 0;
        for (double s : scores) sum += s;
        return sum / scores.size();
    }
};

class TutorManager {
private:
    std::vector<Student> classList;

public:
    void enrollStudent(std::string name, int grade) {
        classList.push_back(Student(name, grade));
        std::cout << "[SYSTEM] Student " << name << " enrolled in Grade " << grade << std::endl;
    }

    void generateReport() {
        std::cout << "\n--- Performance Summary ---" << std::endl;
        for (auto& s : classList) {
            std::cout << "Student: " << s.name << " | Avg: " << s.calculateAverage() << "%" << std::endl;
        }
    }
};

int main() {
    TutorManager manager;
    manager.enrollStudent("A. Perera", 11);
    manager.enrollStudent("B. Fernando", 10);
    
    // Simulating score entry
    // manager.generateReport();
    
    return 0;
}
