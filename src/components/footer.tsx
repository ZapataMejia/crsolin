export default function Footer() {
  return (
    <>
      <footer className="border-top p-4">
        <div className="copyright text-center text-sm text-muted">
          © <script>
            document.write(new Date().getFullYear())
          </script>{" "}
          CR Soluciones Industriales. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}


