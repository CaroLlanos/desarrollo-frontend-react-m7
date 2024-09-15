import { motion } from 'framer-motion';

const ModalTraslate = ({ visible, children, onClose }) => {
    if (!visible) {
        return null;
    }
    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-traslate"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <button className="close-btn-success" onClick={onClose}>X</button>
                    <h2> Traductor USIP </h2>
                        {children}
                </div>
            </motion.div>
        </div>
    );
};

export default ModalTraslate;
