type Feature = {
    title: string
    description: string
}

type Purpose = {
    description: string[]
    feature: Feature[]
}


type Example = {
    title: string
    source_code: string
}

type LinkProps = {
    name: string
    link: string
    slug: string
    introduction: string
    description: string[]
    purpose: Purpose
    example: Example[]
}

export const links: LinkProps[] = [
    {
        name: "Single Responsibility Principle",
        link: "/types/single-responsibility-principle",
        slug: 'single-responsibility-principle',
        introduction: 'Single Responsibility Principle (SRP) is the cornerstone of solid software design and development, advocating for components that have a clear and singular purpose. In the context of ReactJS, adhering to SRP translates to creating components that are focused, maintainable, and contribute to a well-structured application.',
        description: [
            'The Single Responsibility Principle (SRP) asserts that a component should have only one reason to change. In other words, a component should have a single responsibility, encapsulating one specific piece of functionality. By adhering to SRP, we avoid building components that are overly complex and have too many concerns.',
            'In the context of ReactJS, this principle encourages us to design components that encapsulate a distinct piece of user interface (UI) or functionality. Each component should excel at its specific task, promoting modularity and making it easier to understand, maintain, and extend.',
        ],
        purpose: {
            description: [
                'The Single Responsibility Principle (SRP) asserts that a component should have only one reason to change. In other words, a component should have a single responsibility, encapsulating one specific piece of functionality. By adhering to SRP, we avoid building components that are overly complex and have too many concerns.',
                'In the context of ReactJS, this principle encourages us to design components that encapsulate a distinct piece of user interface (UI) or functionality. Each component should excel at its specific task, promoting modularity and making it easier to understand, maintain, and extend.',
                "By embracing the Single Responsibility Principle (SRP) in your ReactJS projects, you're laying the foundation for a clean, maintainable, and scalable codebase. This principle encourages a mindset of building components with laser focus, leading to a more organized and harmonious development process."
            ],
            feature: [
                {
                    title: "Clearer Codebase",
                    description: "Components with a single responsibility are inherently easier to understand. When you revisit your code, you'll quickly grasp the component's purpose, making maintenance and debugging more efficient."
                },
                {
                    title: "Focused Components",
                    description: "With SRP, each component's focus is refined to a specific task. This approach leads to components that are concise and have a clear purpose, reducing the chances of bloated and confusing code."
                },
                {
                    title: "Ease of Maintenance",
                    description: "When a component's responsibility is well-defined, making changes or enhancements becomes less risky. You can confidently modify a component without affecting unrelated parts of your application."
                },
                {
                    title: "Reusability",
                    description: "Components built with SRP in mind are often more reusable. Because they encapsulate specific functionality, you can plug them into different parts of your application with ease."
                },
                {
                    title: "Testing Made Easier",
                    description: "Components adhering to SRP are simpler to test. Unit testing becomes more focused and targeted, ensuring that the individual functionality works as intended."
                },
                {
                    title: "Collaboration Enhancement",
                    description: "When team members work on components with distinct responsibilities, they can collaborate more effectively. Different team members can tackle separate components without stepping on each other's toes."
                },
                {
                    title: "Reduced Cognitive Load:",
                    description: "By having each component responsible for a single task, developers can concentrate on understanding and improving one aspect at a time. This minimizes cognitive overload and promotes productivity."
                }
            ]
        },
        example: [
            {
                title: 'Form Input Handling Component',
                source_code:`import React, { useState } from 'react';

const InputField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
                `
            },
            {
                title: 'User Authentication Component',
                source_code:`import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Logic for user authentication
        onLogin(username, password);
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;
                `
            },
            {
                title: 'Displaying User Information Component',
                source_code:`import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default UserProfile;

                `
            },
            {
                title: 'List Rendering Component',
                source_code:`import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default ItemList;
                `
            },
            {
                title: 'Pagination Component',
                source_code:`import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div>
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage} / {totalPages}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
};

export default Pagination;
                
                `
            }
        ],
    },
    {
        name: "Open/Closed Principle",
        link: "/types/open-closed-principle",
        slug: 'open-closed-principle',
        introduction: 'Open/Closed Principle (OCP)  is a foundational concept in software design that encourages developers to create components that are open for extension but closed for modification. In the realm of ReactJS, applying the OCP allows us to build modular and adaptable user interfaces that can evolve without disrupting existing functionality',
        description: [
            'The Open/Closed Principle (OCP) posits that software entities (classes or components) should be open for extension, meaning you can add new features or behaviors, but closed for modification, implying that existing code remains untouched. This principle promotes the creation of components that can be extended or customized without altering their original source code.',
            'In the context of ReactJS, this means designing components in a way that accommodates future changes or enhancements without requiring changes to the existing codebase. By embracing the OCP, we foster a design that can gracefully evolve over time, maintaining a high level of stability and avoiding unintended side effects.',
        ],
        purpose: {
            description: [
                'Incorporating the Open/Closed Principle (OCP) into your ReactJS development practices offers a strategic advantage by enabling you to accommodate changes without sacrificing the integrity of your codebase. By embracing the concept of extensibility over modification, you foster a culture of building on top of existing foundations, resulting in an adaptable and robust application.',
                'The Open/Closed Principle (OCP) serves several vital purposes within ReactJS development, contributing to the overall robustness and longevity of your application:',
            ],
            feature: [
                {
                    title: "Modularity and Extensibility",
                    description: "By creating components that are open for extension, you can easily add new features or behaviors by building upon existing components, rather than altering them. This modularity accelerates development and minimizes the risk of introducing bugs."
                },
                {
                    title: "Risk Mitigation",
                    description: "Since existing components remain closed for modification, you significantly reduce the chances of inadvertently introducing issues or bugs when making changes. This approach improves code stability and reduces regression risks."
                },
                {
                    title: "Maintainable Customization",
                    description: "The OCP allows for customization through extension, making it straightforward to tailor components to specific requirements without affecting the core functionality. This is especially valuable when working with third-party libraries or frameworks."
                },
                {
                    title: "Codebase Consistency",
                    description: "Components that adhere to the OCP have a clear and consistent structure. This eases comprehension and maintenance for developers, as they can trust that extending a component won't disrupt its existing behavior."
                },
                {
                    title: "Adaptable Interfaces",
                    description: "Components designed with the OCP in mind often define well-documented and standardized interfaces. This enables developers to add new implementations that adhere to the same interface, promoting predictability and collaboration."
                },
                {
                    title: "Long-Term Scalability",
                    description: "The OCP positions your application for seamless scalability. As your application grows and requirements change, you can extend existing components or create new ones, confident that your architecture will remain stable."
                },
            ]
        },
        example: [
            {
                title: 'Theme Customization Component',
                source_code:`import React from 'react';

const ThemeButton = ({ theme }) => {
    const buttonStyles = {
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
    };

    return (
        <button style={buttonStyles}>Click me</button>
    );
};

export default ThemeButton;
                `
            },
            {
                title: 'Notification System Component',
                source_code:`import React, { useState } from 'react';

const NotificationSystem = ({ notifications }) => {
    return (
        <div>
            {notifications.map((notification) => (
            <div className={notification.type}>{notification.message}</div>
            ))}
        </div>
    );
};

export default NotificationSystem;
                
                `
            },
            {
                title: 'Sorting Algorithm Visualization Component',
                source_code:`import React, { useState, useEffect } from 'react';

const SortVisualizer = ({ arrayToSort }) => {
    const [sortedArray, setSortedArray] = useState([]);

    useEffect(() => {
    // Implement sorting algorithm and update sortedArray
    }, [arrayToSort]);

    return (
        <div>
            {sortedArray.map((value) => (
            <div key={value}>{value}</div>
            ))}
        </div>
    );
};

export default SortVisualizer;
                `
            },
            {
                title: 'Authentication Wrapper Component',
                source_code:`import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthWrapper = ({ user, allowedRoles, children }) => {
    if (!user || !allowedRoles.includes(user.role)) {
    return <Redirect to="/login" />;
    }

    return children;
};

export default AuthWrapper;
                `
            },
            {
                title: 'Chart Visualization Component',
                source_code:`import React from 'react';
import { LineChart, BarChart } from 'react-chartjs-2';
                
const ChartVisualizer = ({ data, type }) => {
    const ChartComponent = type === 'line' ? LineChart : BarChart;

    return (
        <div>
            <ChartComponent data={data} />
        </div>
    );
};

export default ChartVisualizer;
                `
            }
        ],
    },
    {
        name: "Liskov Substitution Principle",
        link: "/types/liskov-substitution-principle",
        slug: 'liskov-substitution-principle',
        introduction: 'Liskov Substitution Principle (LSP)  is a fundamental principle in object-oriented design that promotes the idea that derived classes (components) should be substitutable for their base classes (components) without altering the correctness of the program. In ReactJS, adhering to the LSP ensures that components can be seamlessly interchanged while maintaining consistent behavior.',
        description: [
            'The Liskov Substitution Principle (LSP) emphasizes that objects (components) of a derived class should be able to replace objects of the base class without affecting the correctness of the program. In simpler terms, if you have a base component and you create a component that inherits from it, the derived component should be usable in any context where the base component is expected.',
            "In the context of ReactJS, the LSP encourages the creation of derived components that adhere to the same interface and behavior as their base components. This ensures that replacing a base component with its derived counterpart won't introduce unexpected errors or disrupt the application's functionality.",
        ],
        purpose: {
            description: [
                "By embracing the Liskov Substitution Principle (LSP) in your ReactJS projects, you're ensuring that your components are modular, reliable, and capable of seamless integration. This principle fosters a mindset of creating components that build upon one another, promoting consistency and harmony within your application.",
                'The Liskov Substitution Principle (LSP) serves several crucial purposes within ReactJS development, contributing to the overall stability, predictability, and maintainability of your application'
            ],
            feature: [
                {
                    title: "Behavioral Consistency",
                    description: " Derived components that adhere to the LSP can be used interchangeably with their base components, ensuring that the behavior remains consistent across different parts of the application."
                },
                {
                    title: "Code Reusability",
                    description: " Components designed with the LSP in mind are more reusable. You can extend base components to create specialized versions without rewriting common functionality."
                },
                {
                    title: "Efficient Testing",
                    description: "Components that satisfy the LSP are easier to test since they share a consistent interface and behavior. You can write test suites for base components and be confident that derived components will also pass those tests."
                },
                {
                    title: "Minimized Bugs and Errors",
                    description: "The LSP reduces the risk of introducing bugs when substituting components. If you can replace a base component with its derived counterpart without issues, the chances of unexpected errors decrease significantly."
                },
                {
                    title: "Scalability and Collaboration",
                    description: "Adhering to the LSP makes your codebase more adaptable to changes and new features. Different team members can confidently work on derived components, knowing they can be integrated without disrupting the application."
                },
                {
                    title: "Clear Communication",
                    description: "When components follow the LSP, their interface and behavior are well-defined. This makes it easier for developers to understand how to use and extend these components."
                },
            ]
        },
        example: [
            {
                title: 'Button Component with Different Themes:',
                source_code:`//Base Component
import React from 'react';

const BaseButton = ({ label }) => {
    return <button className="base-button">{label}</button>;
};

export default BaseButton;

//Derived Component

import React from 'react';
import BaseButton from './BaseButton';

const ThemedButton = ({ label }) => {
  return <BaseButton label={label} className="themed-button" />;
};

export default ThemedButton
                `
            },
            {
                title: 'Chart Visualization with Enhancements',
                source_code:`//Base Component
import React from 'react';

const BaseChart = ({ data }) => {
    // Render base chart based on data
};
  
export default BaseChart;

//Derived Component

import React from 'react';
import BaseChart from './BaseChart';

const EnhancedChart = ({ data }) => {
  // Render enhanced chart based on data, adding additional features
};

export default EnhancedChart;
                `
            },
            {
                title: 'Notification System with Animation',
                source_code:`//Base Component
import React from 'react';

const BaseNotification = ({ message }) => {
    return <div className="base-notification">{message}</div>;
};

export default BaseNotification;

//Derived Component

import React from 'react';
import BaseNotification from './BaseNotification';

const AnimatedNotification = ({ message }) => {
  return <BaseNotification message={message} className="animated-notification" />;
};

export default AnimatedNotification;
                `
            },
            {
                title: 'User Profile Display with Additional Information',
                source_code:`//Base Component
import React from 'react';

const BaseUserProfile = ({ user }) => {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
    );
};
  
export default BaseUserProfile;

//Derived Component

import React from 'react';
import BaseUserProfile from './BaseUserProfile';

const ExtendedUserProfile = ({ user }) => {
  return (
    <BaseUserProfile user={user} />
    <p>Role: {user.role}</p>
  );
};

export default ExtendedUserProfile;
                `
            },
            {
                title: 'Pagination with Customizatio',
                source_code:`//Base Component
import React from 'react';

const BasePagination = ({ currentPage, totalPages }) => {
    return (
      <div>
        <button disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button disabled={currentPage === totalPages}>Next</button>
      </div>
    );
};

//Derived Component

import React from 'react';
import BasePagination from './BasePagination';

const CustomizedPagination = ({ currentPage, totalPages }) => {
  return (
    <BasePagination currentPage={currentPage} totalPages={totalPages} />
    <p>Custom Text: {currentPage}/{totalPages}</p>
  );
};

export default CustomizedPagination;
                `
            }
        ],
        
    },
    {
        name: "Interface Segregation Principle",
        link: "/types/interface-segregation-principle",
        slug: 'interface-segregation-principle',
        introduction: 'Interface Segregation Principle (ISP) is a crucial principle in software design that encourages developers to create focused and client-specific interfaces for components. In ReactJS, applying the ISP results in components that are more modular, maintainable, and better aligned with specific requirements.',
        description: [
            "The Interface Segregation Principle (ISP) states that a class (component) should not be forced to depend on interfaces (props) it doesn't use. This principle emphasizes the creation of smaller and more specialized interfaces tailored to the needs of the consuming components. Components should only be exposed to the subset of props that are relevant to their functionality.",
            "In ReactJS, this translates to designing components with finely-grained props that are specific to the component's responsibilities. By adhering to the ISP, we avoid overloading components with unnecessary props, reducing complexity and minimizing interdependencies.",
        ],
        purpose: {
            description: [
                "By embracing the Interface Segregation Principle (ISP) in your ReactJS projects, you're fostering a culture of creating components with specialized interfaces, resulting in a more organized and harmonious codebase. This principle encourages developers to think critically about the responsibilities of each component and craft interfaces that are tailored to those responsibilities.",
                'The Interface Segregation Principle (ISP) serves a multitude of important purposes within ReactJS development, contributing to the overall structure, maintainability, and flexibility of your application:'
            ],
            feature: [
                {
                    title: "Clearer Codebase",
                    description: "Components with a single responsibility are inherently easier to understand. When you revisit your code, you'll quickly grasp the component's purpose, making maintenance and debugging more efficient."
                },
                {
                    title: "Focused Components",
                    description: "With SRP, each component's focus is refined to a specific task. This approach leads to components that are concise and have a clear purpose, reducing the chances of bloated and confusing code."
                },
                {
                    title: "Ease of Maintenance",
                    description: "When a component's responsibility is well-defined, making changes or enhancements becomes less risky. You can confidently modify a component without affecting unrelated parts of your application."
                },
                {
                    title: "Reusability",
                    description: "Components built with SRP in mind are often more reusable. Because they encapsulate specific functionality, you can plug them into different parts of your application with ease."
                },
                {
                    title: "Testing Made Easier",
                    description: "Components adhering to SRP are simpler to test. Unit testing becomes more focused and targeted, ensuring that the individual functionality works as intended."
                },
                {
                    title: "Collaboration Enhancement",
                    description: "When team members work on components with distinct responsibilities, they can collaborate more effectively. Different team members can tackle separate components without stepping on each other's toes."
                },
                {
                    title: "Reduced Cognitive Load:",
                    description: "By having each component responsible for a single task, developers can concentrate on understanding and improving one aspect at a time. This minimizes cognitive overload and promotes productivity."
                }
            ]
        },
        example: [
            {
                title: 'Button Component with Callbacks',
                source_code:`import React from 'react';

const CallbackButton = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default CallbackButton;
                `
            },
            {
                title: 'Input Validation Component',
                source_code:`import React, { useState } from 'react';

const ValidationInput = ({ label, value, onChange, isValid }) => {
    const inputStyles = {
    borderColor: isValid ? 'green' : 'red',
    };

    return (
        <div>
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} style={inputStyles} />
        </div>
    );
};

export default ValidationInput;
                `
            },
            {
                title: 'Data Fetching and Rendering Componen',
                source_code:`import React, { useState, useEffect } from 'react';

const DataRenderer = ({ fetchData }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchDataAndSetData = async () => {
        const result = await fetchData();
        setData(result);
    };
    fetchDataAndSetData();
    }, [fetchData]);

    return (
        <ul>
            {data.map((item) => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default DataRenderer;                
                `
            },
            {
                title: 'Conditional Rendering Component',
                source_code:`import React from 'react';

const ConditionalRenderer = ({ condition, children }) => {
    return condition ? children : null;
};

export default ConditionalRenderer;
                `
            },
            {
                title: 'Form Component with Submit Handler',
                source_code:`import React, { useState } from 'react';

const FormWithSubmit = ({ fields, onSubmit }) => {
    const [formData, setFormData] = useState({});

    const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSubmit = () => {
    onSubmit(formData);
    };

    return (
        <form>
            {fields.map((field) => (
            <input
                key={field.name}
                type={field.type}
                value={formData[field.name] || ''}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
            />
            ))}
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default FormWithSubmit;                
                `
            }
        ],
    },
    {
        name: "Dependency Inversion Principle",
        link: "/types/dependency-inversion-principle",
        slug: 'dependency-inversion-principle',
        introduction: ' Dependency Inversion Principle (DIP)   is a foundational concept in software design that advocates for components to depend on abstractions, not on concrete implementations. In the realm of ReactJS, adhering to the DIP leads to a more flexible, maintainable, and easily testable codebase.',
        description: [
            'The Dependency Inversion Principle (DIP) encourages high-level modules (components) to depend on abstractions, while low-level modules (dependencies) should implement those abstractions. This principle promotes the decoupling of components and their dependencies, fostering an architecture that is resilient to changes and adaptable to various scenarios.',
            'In the context of ReactJS, the DIP suggests that components should depend on interfaces, abstract classes, or higher-order components, rather than on concrete implementations. This allows for interchangeable and easily swappable dependencies, promoting a modular and loosely coupled design.',
        ],
        purpose: {
            description: [
                "By embracing the Dependency Inversion Principle (DIP) in your ReactJS projects, you're fostering a culture of building components that are agnostic to specific implementations. This principle encourages you to think in terms of interfaces and abstractions, leading to a more modular, adaptable, and maintainable codebase.",
                'The Dependency Inversion Principle (DIP) serves several important purposes within ReactJS development, contributing to the overall quality, maintainability, and adaptability of your application:'
            ],
            feature: [
                {
                    title: "Reduced Coupling",
                    description: " By depending on abstractions, components become less tightly coupled to specific implementations. This reduces the risk of cascading changes when modifying dependencies."
                },
                {
                    title: "Flexibility and Adaptability",
                    description: "Following the DIP allows you to easily swap out implementations or change dependencies without affecting the higher-level components. This makes your codebase more adaptable to changes."
                },
                {
                    title: "Testability",
                    description: "Components that rely on abstractions are easier to test, as you can provide mock or stub implementations of the abstractions for testing purposes. This facilitates comprehensive testing without involving real dependencies."
                },
                {
                    title: "Isolation of Concerns",
                    description: "The DIP encourages clear separation between components and their dependencies. This isolation enhances code organization and promotes a more modular structure."
                },
                {
                    title: "Future-Proofing",
                    description: "By adhering to the DIP, your codebase is better prepared for changes and future enhancements. You can introduce new dependencies or swap out existing ones without major disruptions."
                },
                {
                    title: "Better Abstraction",
                    description: "Following the DIP encourages the creation of well-defined abstractions, promoting a more consistent and coherent architecture."
                },
            ]
        },
        example: [
            {
                title: 'Button Component with Callbacks',
                source_code:`import React, { useState, useEffect } from 'react';
import { fetchDataService } from './dataService'; // Dependency

const DataRenderer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        const result = await fetchDataService();
        setData(result);
    };
    fetchData();
    }, []);

    return (
    <ul>
        {data.map((item) => (
        <li key={item.id}>{item.name}</li>
        ))}
    </ul>
    );
};

export default DataRenderer;
                `
            },
            {
                title: 'Theme Provider Injection',
                source_code:`import React from 'react';
import { ThemeProvider } from './themeContext'; // Dependency

const ThemedButton = ({ label }) => {
    return (
    <ThemeProvider>
        {({ theme }) => (
        <button style={{ backgroundColor: theme }}>{label}</button>
        )}
    </ThemeProvider>
    );
};

export default ThemedButton;
                `
            },
            {
                title: 'Logger Service Injection',
                source_code:`import React from 'react';
import { useLogger } from './logger'; // Dependency

const ActionButton = ({ label, action }) => {
    const logger = useLogger();

    const handleClick = () => {
    action();
    logger.log(
        "Action '{label}' executed.");
    };

    return <button onClick={handleClick}>{label}</button>;
};

export default ActionButton;
                `
            },
            {
                title: 'User Authentication Context Injection',
                source_code:`import React, { useContext } from 'react';
import { UserContext } from './userContext'; // Dependency

const UserProfile = () => {
    const user = useContext(UserContext);

    return (
    <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
    </div>
    );
};

export default UserProfile;                     
                `
            },
            {
                title: 'Logger Service Injection',
                source_code:`import React from 'react';
import { useLogger } from './logger'; // Dependency

const ActionButton = ({ label, action }) => {
    const logger = useLogger();

    const handleClick = () => {
    action();
    logger.log(
        "Action '{label}' executed.");
    };

    return <button onClick={handleClick}>{label}</button>;
};

export default ActionButton;
                `
            },
            {
                title: 'Data Transformation Service Injection',
                source_code:`import React, { useState, useEffect } from 'react';
import { transformDataService } from './dataTransformation'; // Dependency

const TransformedDataRenderer = () => {
    const [transformedData, setTransformedData] = useState([]);

    useEffect(() => {
    const fetchDataAndTransform = async () => {
        const rawData = await fetchDataService();
        const transformedResult = transformDataService(rawData);
        setTransformedData(transformedResult);
    };
    fetchDataAndTransform();
    }, []);

    return (
    <ul>
        {transformedData.map((item) => (
        <li key={item.id}>{item.label}</li>
        ))}
    </ul>
    );
};

export default TransformedDataRenderer;                            
                `
            }
        ],
        
    }
]

export function isExistRoute(slug: string | string[]):boolean {
    return links.some(d => d.slug === slug);
}

export function toSearchType(slug: any): LinkProps {
    const results = links.filter((d) =>
        d.slug.toLowerCase().includes(slug.toLowerCase())
    );

    return results[0];
}