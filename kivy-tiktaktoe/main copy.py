from kivy.app import App

from tic_tac_toe_game import TicTacToeGame


class TicTacToeApp(App):
    def build(self):
        game = TicTacToeGame()
        return game


if __name__ == '__main__':
    TicTacToeApp().run()
