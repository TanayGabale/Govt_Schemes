from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pandas as pd
import numpy as np
import joblib

class PolicyRecommendationModel:
    def __init__(self, data_path):
        self.data_path = data_path
        self.model = RandomForestClassifier()
        self.load_data()
        self.train_model()

    def load_data(self):
        self.data = pd.read_csv(self.data_path)
        self.features = self.data.drop('recommended', axis=1)
        self.labels = self.data['recommended']

    def train_model(self):
        X_train, X_test, y_train, y_test = train_test_split(self.features, self.labels, test_size=0.2, random_state=42)
        self.model.fit(X_train, y_train)
        print(f'Model trained with accuracy: {self.model.score(X_test, y_test)}')

    def recommend_policy(self, user_data):
        user_data = np.array(user_data).reshape(1, -1)
        prediction = self.model.predict(user_data)
        return prediction[0]

    def save_model(self, filename='policy_recommendation_model.pkl'):
        joblib.dump(self.model, filename)

    def load_model(self, filename='policy_recommendation_model.pkl'):
        self.model = joblib.load(filename)