from flask import Flask, render_template, redirect, url_for, request, Blueprint, flash
from flask_login import login_required, current_user
from __init__ import create_app, db

main = Blueprint('main', __name__)


@main.route('/')  # home page that returns 'index'
def index():
    return render_template('index.html')


@main.route('/profile')  # profile page that returns 'profile'
@login_required  # login is required in order to access this page
def profile():
    return render_template('profile.html', name=current_user.name, email=current_user.email)


@main.route('/topics')  # Topics page that returns 'topics'
def topics():
    return render_template('topics.html')


@main.route('/calculator')  # Calculator page that returns 'calculator'
def calculator():
    return render_template('calculator.html')


@main.route('/solver')  # Equation solver page that returns 'solver'
@login_required  # login is required in order to access this page
def solver():
    return render_template('solver.html')


@main.route('/geometry')  # Geometry page that returns 'geometry'
@login_required  # login is required in order to access this page
def geometry():
    return render_template('geometry.html')


@main.route('/converter')  # Unit converter page that returns 'converter'
@login_required  # login is required in order to access this page
def converter():
    return render_template('converter.html')


@main.route('/complex')  # Complex numbers page that returns 'complex'
@login_required  # login is required in order to access this page
def complex():
    return render_template('complex.html')


@main.route('/matrices')  # Matrices page that returns 'matrices'
@login_required  # login is required in order to access this page
def matrices():
    return render_template('matrices.html')


@main.route('/mechanics')  # Mechanics page that returns 'mechanics'
@login_required  # login is required in order to access this page
def mechanics():
    return render_template('mechanics.html')


@main.route('/checker')  # Number checker page that returns 'checker'
@login_required  # login is required in order to access this page
def checker():
    return render_template('checker.html')


@main.route('/graph')  # Graphing page that returns 'graph'
def graph():
    return render_template('graph.html')


@main.route('/tictactoe')  # tictactoe page that returns 'tictactoe'
def tictactoe():
    return render_template('tictactoe.html')


@main.route('/clock')  # tictactoe page that returns 'tictactoe'
def clock():
    return render_template('clock.html')


@main.route('/random')  # tictactoe page that returns 'tictactoe'
def random():
    return render_template('random.html')


@main.route('/learnMatrices')  # Template page that returns 'tictactoe'
def learnMatrices():
    return render_template('learnMatrices.html')


@main.route('/learnMechanics')  # Template page that returns 'tictactoe'
def learnMechanics():
    return render_template('learnMechanics.html')


@main.route('/learnGeometry')  # Template page that returns 'tictactoe'
def learnGeometry():
    return render_template('learnGeometry.html')


@main.route('/learnComplex')  # Template page that returns 'tictactoe'
def learnComplex():
    return render_template('learnComplex.html')


@main.route('/learnSolver')  # Template page that returns 'tictactoe'
def learnSolver():
    return render_template('learnSolver.html')


@main.route('/connect4')  # Template page that returns 'tictactoe'
def connect4():
    return render_template('connect4.html')


app = create_app()  # we initialize our flask app using the __init__.py function
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # create the SQLite database
        app.run(debug=True)  # run the flask app on debug mode

