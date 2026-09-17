# Tareas del Front

    1. RUTAS:
        
        Rutas públicas:
        /home => home
        ** => c404

        Rutas privadas:
        /dashboard
            Rutas hijas:
            /user => userList
            /user/_id => userView
            /newuser => formUser
            /updateuser/id => formUser

    2. Componentes compartidos
        NavDashboard

    3. Componentes que no son páginas
        userCard

    4. Interfaces
        IEmpleado
        IUser(login)

    5. Servicios
        EmpladoServices
        UsersServices