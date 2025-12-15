<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <header>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <ul class="navbar-nav d-flex flex-row column-gap-3">
                    <a class="navbar-brand" href="#">LPTF</a>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <main class="bg-secondary-subtle">
        <!-- Title -->
        <div class="container-fluid justify-content-center text-center">
            <h1>La Plateforme_</h1>
        </div>

        <div class="container-fluid d-flex gap-4">
            <!-- Butterfly Card -->

            <div class="card" style="width: 18rem;">
                <img src="https://preview.free3d.com/img/2022/05/3190230297933252119/96ttblif.jpg" class="card-img-top" alt="...">
                <div class="card-body" style="height: 3rem;">
                    <h5 class="card-title">Un papillon</h5>
                    <p class="card-text">Le papillon de la Reine Alexandra est le plus grand papillon du monde. En anglais,
                        son nom contient "birdwing" (aile d'oiseau) car sa grande taille est comparable à certains oiseaux.
                    </p>
                    <a href="#" class="btn btn-primary">Commander un papillon</a>
                </div>
            </div>

            <!-- Bonjour monde -->

            <div class="bg-light p-3">
                <h2>Bonjour, monde!</h2>
                <div>Il existe plusieurs visions du terme :</div>
                <div>Le monde est la matière, l'espace et les phénomènes qui nous sont
                    accessibles par les sens, l'expérience ou la raison.
                </div>
                <button type="button" class="btn btn-danger">Rebooter le monde</button>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>


                <nav class="d-flex justify-content-end" aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

            <!-- menu vertical -->

            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <button type="button" class="btn btn-primary">Limbes</button>
                <button type="button" class="btn btn btn-light">Luxure</button>
                <button type="button" class="btn btn btn-light">Gourmandise</button>
                <button type="button" class="btn btn btn-light">Avarice</button>
                <button type="button" class="btn btn btn-light">Colère</button>
                <button type="button" class="btn btn btn-light">Hérésie</button>
                <button type="button" class="btn btn btn-light">Violence</button>
                <button type="button" class="btn btn btn-light">Ruse et tromperie</button>
                <button type="button" class="btn btn btn-light">Trahison</button>
                <button type="button" class="btn btn btn-light">Internet Explorer</button>
            </div>

        </div>

        <!-- Block under -->

        <!-- Progress bar -->
        <div class="container-fluid w-50">
            <div class="d-flex justify-content-end">Installation de AI 9000</div>
            <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar progress-bar-striped bg-warning" style="width: 85%"></div>
            </div>
        </div>


        <!-- The two forms -->
        <div class="container-fluid d-flex">
            <form>
                <h4>Recevez votre copie gratuite d'internet 2 !</h4>


                <div class="input-group mb-3">
                    <span class="input-group-text">@</span>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Login</label>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
                        <label for="floatingInputGroup1">Mot de passe</label>
                    </div>
                    <span class="input-group-text">@example.com</span>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">DogeCoin</span>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
                    </div>
                    <span class="input-group-text">.00</span>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">https://website/</span>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
                    </div>
                </div>


            </form>

            <form>

                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4">
                <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>

                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword4">

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>

            </form>
        </div>
    </main>

    <footer>

    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>

</html>