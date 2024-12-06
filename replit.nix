{pkgs}: {
  deps = [
    pkgs.python311Packages.flask-bootstrap
    pkgs.python310Packages.flask-api
    pkgs.python310Packages.flask-socketio
  ];
}
