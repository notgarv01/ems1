import { useState, useRef, useEffect } from "react";

export const useSmartDropdown = (threshold = 200) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState("down");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      
      // Agar niche jagah kam hai toh upar khulega
      setDropdownDirection(spaceBelow < threshold ? "up" : "down");
    }
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { isOpen, dropdownDirection, dropdownRef, toggleDropdown, closeDropdown };
};