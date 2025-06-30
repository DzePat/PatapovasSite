import { motion, AnimatePresence} from "motion/react"
import styled from 'styled-components';
import { useState, useEffect } from "react";

const Message = styled.div`
  font-size: 12px;
  color: white;
  width: 100%
`

interface ErrorMessageProps {
  messages: string[];
  visible: boolean;
  onHide?: () => void;
}


function ErrorMessage({ messages, visible, onHide }: ErrorMessageProps) {
  const [isVisible, setIsVisible] = useState(visible);
  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onHide) onHide();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [visible, onHide]);

   if (!isVisible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          style={{
            display: "grid",
            gridTemplateColumns: '1fr',
            gap: '1rem',
            position: 'fixed',
            top: '20px',
            transform: 'translateX(-50%)',
            backgroundColor: "black",
            color: 'white',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 1000,
            fontWeight: 'bold',
            fontSize: '10px',
            pointerEvents: 'auto',
            border: 'solid 1px white',
            boxSizing: 'border-box',
          }}
        >
            {messages.map(message => (
              <Message key={message}>{message}</Message>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ErrorMessage
