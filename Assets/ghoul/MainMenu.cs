using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class MainMenu : MonoBehaviour {

	public Button Play;
	public Button Exit;

	// Use this for initialization
	void Start () {
		Play = Play.GetComponent<Button>();
		Exit = Exit.GetComponent<Button>();
	}
	
	void StartGame () {
		Application.LoadLevel (1);
	}

	void ExitGame () {
		Application.Quit ();
	}
}
