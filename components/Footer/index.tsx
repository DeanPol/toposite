export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem',
        fontSize: '14px',
        position: 'absolute',
        width: '100%',
        bottom: '0',
        backgroundColor: 'white',
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Created by Politis. All rights
        reserved.
      </p>
    </footer>
  );
}
