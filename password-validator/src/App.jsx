
// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [theme, setTheme] = useState('dark');
//   const [password, setPassword] = useState('');
//   const [strength, setStrength] = useState(0);
//   const [requirements, setRequirements] = useState({
//     length: false,
//     uppercase: false,
//     lowercase: false,
//     number: false,
//     special: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [feedback, setFeedback] = useState('');

//   useEffect(() => {
//     document.body.className = theme === 'light' ? 'light-mode' : '';
//   }, [theme]);

//   const checkPasswordStrength = (pass) => {
//     let score = 0;
//     const newRequirements = {
//       length: pass.length >= 8,
//       uppercase: /[A-Z]/.test(pass),
//       lowercase: /[a-z]/.test(pass),
//       number: /[0-9]/.test(pass),
//       special: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
//     };

//     if (newRequirements.length) score += 20;
//     if (newRequirements.uppercase) score += 20;
//     if (newRequirements.lowercase) score += 20;
//     if (newRequirements.number) score += 20;
//     if (newRequirements.special) score += 20;

//     let newFeedback = '';
//     if (pass.length === 0) {
//       newFeedback = 'Start typing to check password strength';
//     } else if (score <= 20) {
//       newFeedback = 'Your password is very weak. Try adding more characters and different types of characters.';
//     } else if (score <= 40) {
//       newFeedback = 'Your password is weak. Consider adding more variety to make it stronger.';
//     } else if (score <= 60) {
//       newFeedback = 'Your password is medium strength. A few more improvements would make it strong.';
//     } else if (score <= 80) {
//       newFeedback = 'Your password is strong! Just a few more tweaks would make it very strong.';
//     } else {
//       newFeedback = 'Excellent! Your password is very strong and secure.';
//     }

//     setRequirements(newRequirements);
//     setStrength(score);
//     setFeedback(newFeedback);
//   };

//   useEffect(() => {
//     checkPasswordStrength(password);
//   }, [password]);

//   const getStrengthColor = () => {
//     if (strength <= 20) return '#f44336';
//     if (strength <= 40) return '#ff9800';
//     if (strength <= 60) return '#00bcd4';
//     if (strength <= 80) return '#4caf50';
//     return '#9c27b0';
//   };

//   const getStrengthText = () => {
//     if (strength <= 20) return 'Very Weak';
//     if (strength <= 40) return 'Weak';
//     if (strength <= 60) return 'Medium';
//     if (strength <= 80) return 'Strong';
//     return 'Very Strong';
//   };

//   const getStrengthEmoji = () => {
//     if (strength <= 20) return '😢';
//     if (strength <= 40) return '😕';
//     if (strength <= 60) return '😐';
//     if (strength <= 80) return '😊';
//     return '😎';
//   };

//   const tips = [
//     'Use a mix of uppercase and lowercase letters',
//     'Include numbers and special characters',
//     'Avoid common words and phrases',
//     "Don't use personal information",
//     'Consider using a password manager',
//     'Make it at least 12 characters long',
//     'Use a unique password for each account',
//     'Consider using a passphrase instead of a password'
//   ];

//   return (
//     <div className="password-validator">
//       <button
//         className="theme-toggle"
//         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//       >
//         Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
//       </button>

//       <div className="validator-container">
//         <h1 className="title">Password Strength Validator</h1>
//         <div className="input-container">
//           <div className="password-input-wrapper">
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="password-input"
//               autoComplete="new-password"
//             />
//             <button
//               className="toggle-password"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? "👁️" : "👁️‍🗨️"}
//             </button>
//           </div>
//         </div>

//         <div className="strength-meter">
//           <div
//             className="strength-bar"
//             style={{
//               width: `${strength}%`,
//               backgroundColor: getStrengthColor(),
//             }}
//           />
//         </div>
//         <div className="strength-text" style={{ color: getStrengthColor() }}>
//           {getStrengthText()} {getStrengthEmoji()}
//         </div>
//         <p className="feedback-text">{feedback}</p>

//         <div className="requirements">
//           <h3>Password Requirements:</h3>
//           <ul>
//             <li className={requirements.length ? 'met' : ''}><span className="requirement-icon">{requirements.length ? '✓' : '✗'}</span>At least 8 characters</li>
//             <li className={requirements.uppercase ? 'met' : ''}><span className="requirement-icon">{requirements.uppercase ? '✓' : '✗'}</span>At least one uppercase letter</li>
//             <li className={requirements.lowercase ? 'met' : ''}><span className="requirement-icon">{requirements.lowercase ? '✓' : '✗'}</span>At least one lowercase letter</li>
//             <li className={requirements.number ? 'met' : ''}><span className="requirement-icon">{requirements.number ? '✓' : '✗'}</span>At least one number</li>
//             <li className={requirements.special ? 'met' : ''}><span className="requirement-icon">{requirements.special ? '✓' : '✗'}</span>At least one special character</li>
//           </ul>
//         </div>
//       </div>

//       <div className="validator-container">
//         <div className="tips">
//           <h3>Tips for a Strong Password:</h3>
//           <ul>
//             {tips.map((tip, index) => (
//               <li key={index}>{tip}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="visual-feedback">
//           {[...Array(5)].map((_, i) => (
//             <span
//               key={i}
//               style={{
//                 backgroundColor: i * 20 < strength ? getStrengthColor() : 'transparent',
//                 border: `2px solid ${i * 20 < strength ? getStrengthColor() : 'var(--border-color)'}`,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : '';
  }, [theme]);

  const checkPasswordStrength = (pass) => {
    let score = 0;
    const newRequirements = {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      number: /[0-9]/.test(pass),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    };

    if (newRequirements.length) score += 20;
    if (newRequirements.uppercase) score += 20;
    if (newRequirements.lowercase) score += 20;
    if (newRequirements.number) score += 20;
    if (newRequirements.special) score += 20;

    let newFeedback = '';
    if (pass.length === 0) {
      newFeedback = 'Start typing to check password strength';
    } else if (score <= 20) {
      newFeedback = 'Your password is very weak. Try adding more characters and different types of characters.';
    } else if (score <= 40) {
      newFeedback = 'Your password is weak. Consider adding more variety to make it stronger.';
    } else if (score <= 60) {
      newFeedback = 'Your password is medium strength. A few more improvements would make it strong.';
    } else if (score <= 80) {
      newFeedback = 'Your password is strong! Just a few more tweaks would make it very strong.';
    } else {
      newFeedback = 'Excellent! Your password is very strong and secure.';
    }

    setRequirements(newRequirements);
    setStrength(score);
    setFeedback(newFeedback);
  };

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 20) return '#f44336';
    if (strength <= 40) return '#ff9800';
    if (strength <= 60) return '#00bcd4';
    if (strength <= 80) return '#4caf50';
    return '#9c27b0';
  };

  const getStrengthText = () => {
    if (strength <= 20) return 'Very Weak';
    if (strength <= 40) return 'Weak';
    if (strength <= 60) return 'Medium';
    if (strength <= 80) return 'Strong';
    return 'Very Strong';
  };

  const getStrengthEmoji = () => {
    if (strength <= 20) return '😢';
    if (strength <= 40) return '😕';
    if (strength <= 60) return '😐';
    if (strength <= 80) return '😊';
    return '😎';
  };

  const tips = [
    'Use a mix of uppercase and lowercase letters',
    'Include numbers and special characters',
    'Avoid common words and phrases',
    "Don't use personal information",
    'Consider using a password manager',
    'Make it at least 12 characters long',
    'Use a unique password for each account',
    'Consider using a passphrase instead of a password'
  ];

  return (
    <div className="password-validator">
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>

      <div className="validator-container">
        <h1 className="title">Password Strength Validator</h1>
        <div className="input-container">
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="password-input"
              autoComplete="new-password"
            />
            <button
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        <div className="strength-meter">
          <div
            className="strength-bar"
            style={{
              width: `${strength}%`,
              backgroundColor: getStrengthColor(),
            }}
          />
        </div>
        <div className="strength-text" style={{ color: getStrengthColor() }}>
          {getStrengthText()} {getStrengthEmoji()}
        </div>
        <p className="feedback-text">{feedback}</p>

        <div className="requirements">
          <h3>Password Requirements:</h3>
          <ul>
            <li className={requirements.length ? 'met' : ''}><span className="requirement-icon">{requirements.length ? '✓' : '✗'}</span>At least 8 characters</li>
            <li className={requirements.uppercase ? 'met' : ''}><span className="requirement-icon">{requirements.uppercase ? '✓' : '✗'}</span>At least one uppercase letter</li>
            <li className={requirements.lowercase ? 'met' : ''}><span className="requirement-icon">{requirements.lowercase ? '✓' : '✗'}</span>At least one lowercase letter</li>
            <li className={requirements.number ? 'met' : ''}><span className="requirement-icon">{requirements.number ? '✓' : '✗'}</span>At least one number</li>
            <li className={requirements.special ? 'met' : ''}><span className="requirement-icon">{requirements.special ? '✓' : '✗'}</span>At least one special character</li>
          </ul>
        </div>
      </div>

      <div className="validator-container">
        <div className="tips">
          <h3>Tips for a Strong Password:</h3>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="visual-feedback">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              style={{
                backgroundColor: i * 20 < strength ? getStrengthColor() : 'transparent',
                border: `2px solid ${i * 20 < strength ? getStrengthColor() : 'var(--border-color)'}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : '';
  }, [theme]);

  const checkPasswordStrength = (pass) => {
    let score = 0;
    const newRequirements = {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      number: /[0-9]/.test(pass),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    };

    if (newRequirements.length) score += 20;
    if (newRequirements.uppercase) score += 20;
    if (newRequirements.lowercase) score += 20;
    if (newRequirements.number) score += 20;
    if (newRequirements.special) score += 20;

    let newFeedback = '';
    if (pass.length === 0) {
      newFeedback = 'Start typing to check password strength';
    } else if (score <= 20) {
      newFeedback = 'Your password is very weak. Try adding more characters and different types of characters.';
    } else if (score <= 40) {
      newFeedback = 'Your password is weak. Consider adding more variety to make it stronger.';
    } else if (score <= 60) {
      newFeedback = 'Your password is medium strength. A few more improvements would make it strong.';
    } else if (score <= 80) {
      newFeedback = 'Your password is strong! Just a few more tweaks would make it very strong.';
    } else {
      newFeedback = 'Excellent! Your password is very strong and secure.';
    }

    setRequirements(newRequirements);
    setStrength(score);
    setFeedback(newFeedback);
  };

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 20) return '#f44336';
    if (strength <= 40) return '#ff9800';
    if (strength <= 60) return '#00bcd4';
    if (strength <= 80) return '#4caf50';
    return '#9c27b0';
  };

  const getStrengthText = () => {
    if (strength <= 20) return 'Very Weak';
    if (strength <= 40) return 'Weak';
    if (strength <= 60) return 'Medium';
    if (strength <= 80) return 'Strong';
    return 'Very Strong';
  };

  const getStrengthEmoji = () => {
    if (strength <= 20) return '😢';
    if (strength <= 40) return '😕';
    if (strength <= 60) return '😐';
    if (strength <= 80) return '😊';
    return '😎';
  };

  const tips = [
    'Use a mix of uppercase and lowercase letters',
    'Include numbers and special characters',
    'Avoid common words and phrases',
    "Don't use personal information",
    'Consider using a password manager',
    'Make it at least 12 characters long',
    'Use a unique password for each account',
    'Consider using a passphrase instead of a password'
  ];

  return (
    <div className="password-validator">
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>

      <div className="validator-container">
        <h1 className="title">Password Strength Validator</h1>
        <div className="input-container">
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="password-input"
              autoComplete="new-password"
            />
            <button
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        <div className="strength-meter">
          <div
            className="strength-bar"
            style={{
              width: `${strength}%`,
              backgroundColor: getStrengthColor(),
            }}
          />
        </div>
        <div className="strength-text" style={{ color: getStrengthColor() }}>
          {getStrengthText()} {getStrengthEmoji()}
        </div>
        <p className="feedback-text">{feedback}</p>

        <div className="requirements">
          <h3>Password Requirements:</h3>
          <ul>
            <li className={requirements.length ? 'met' : ''}><span className="requirement-icon">{requirements.length ? '✓' : '✗'}</span>At least 8 characters</li>
            <li className={requirements.uppercase ? 'met' : ''}><span className="requirement-icon">{requirements.uppercase ? '✓' : '✗'}</span>At least one uppercase letter</li>
            <li className={requirements.lowercase ? 'met' : ''}><span className="requirement-icon">{requirements.lowercase ? '✓' : '✗'}</span>At least one lowercase letter</li>
            <li className={requirements.number ? 'met' : ''}><span className="requirement-icon">{requirements.number ? '✓' : '✗'}</span>At least one number</li>
            <li className={requirements.special ? 'met' : ''}><span className="requirement-icon">{requirements.special ? '✓' : '✗'}</span>At least one special character</li>
          </ul>
        </div>
      </div>

      <div className="validator-container">
        <div className="tips">
          <h3>Tips for a Strong Password:</h3>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="visual-feedback">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              style={{
                backgroundColor: i * 20 < strength ? getStrengthColor() : 'transparent',
                border: `2px solid ${i * 20 < strength ? getStrengthColor() : 'var(--border-color)'}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : '';
  }, [theme]);

  const checkPasswordStrength = (pass) => {
    let score = 0;
    const newRequirements = {
      length: pass.length >= 8,
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      number: /[0-9]/.test(pass),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    };

    if (newRequirements.length) score += 20;
    if (newRequirements.uppercase) score += 20;
    if (newRequirements.lowercase) score += 20;
    if (newRequirements.number) score += 20;
    if (newRequirements.special) score += 20;

    let newFeedback = '';
    if (pass.length === 0) {
      newFeedback = 'Start typing to check password strength';
    } else if (score <= 20) {
      newFeedback = 'Your password is very weak. Try adding more characters and different types of characters.';
    } else if (score <= 40) {
      newFeedback = 'Your password is weak. Consider adding more variety to make it stronger.';
    } else if (score <= 60) {
      newFeedback = 'Your password is medium strength. A few more improvements would make it strong.';
    } else if (score <= 80) {
      newFeedback = 'Your password is strong! Just a few more tweaks would make it very strong.';
    } else {
      newFeedback = 'Excellent! Your password is very strong and secure.';
    }

    setRequirements(newRequirements);
    setStrength(score);
    setFeedback(newFeedback);
  };

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 20) return '#f44336';
    if (strength <= 40) return '#ff9800';
    if (strength <= 60) return '#00bcd4';
    if (strength <= 80) return '#4caf50';
    return '#9c27b0';
  };

  const getStrengthText = () => {
    if (strength <= 20) return 'Very Weak';
    if (strength <= 40) return 'Weak';
    if (strength <= 60) return 'Medium';
    if (strength <= 80) return 'Strong';
    return 'Very Strong';
  };

  const getStrengthEmoji = () => {
    if (strength <= 20) return '😢';
    if (strength <= 40) return '😕';
    if (strength <= 60) return '😐';
    if (strength <= 80) return '😊';
    return '😎';
  };

  const tips = [
    'Use a mix of uppercase and lowercase letters',
    'Include numbers and special characters',
    'Avoid common words and phrases',
    "Don't use personal information",
    'Consider using a password manager',
    'Make it at least 12 characters long',
    'Use a unique password for each account',
    'Consider using a passphrase instead of a password'
  ];

  return (
    <div className="password-validator">
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>

      <div className="validator-container">
        <h1 className="title">Password Strength Validator</h1>
        <div className="input-container">
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="password-input"
              autoComplete="new-password"
            />
            <button
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        <div className="strength-meter">
          <div
            className="strength-bar"
            style={{
              width: `${strength}%`,
              backgroundColor: getStrengthColor(),
            }}
          />
        </div>
        <div className="strength-text" style={{ color: getStrengthColor() }}>
          {getStrengthText()} {getStrengthEmoji()}
        </div>
        <p className="feedback-text">{feedback}</p>

        <div className="requirements">
          <h3>Password Requirements:</h3>
          <ul>
            <li className={requirements.length ? 'met' : ''}><span className="requirement-icon">{requirements.length ? '✓' : '✗'}</span>At least 8 characters</li>
            <li className={requirements.uppercase ? 'met' : ''}><span className="requirement-icon">{requirements.uppercase ? '✓' : '✗'}</span>At least one uppercase letter</li>
            <li className={requirements.lowercase ? 'met' : ''}><span className="requirement-icon">{requirements.lowercase ? '✓' : '✗'}</span>At least one lowercase letter</li>
            <li className={requirements.number ? 'met' : ''}><span className="requirement-icon">{requirements.number ? '✓' : '✗'}</span>At least one number</li>
            <li className={requirements.special ? 'met' : ''}><span className="requirement-icon">{requirements.special ? '✓' : '✗'}</span>At least one special character</li>
          </ul>
        </div>
      </div>

      <div className="validator-container">
        <div className="tips">
          <h3>Tips for a Strong Password:</h3>
          <ul>
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="visual-feedback">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              style={{
                backgroundColor: i * 20 < strength ? getStrengthColor() : 'transparent',
                border: `2px solid ${i * 20 < strength ? getStrengthColor() : 'var(--border-color)'}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

