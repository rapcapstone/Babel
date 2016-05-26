using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class MainMenu : MonoBehaviour {

    public Button Play;
    public Button Exit;
    
	void Start () {
        Play = Play.GetComponent<Button> ();
        Exit = Exit.GetComponent<Button> ();
	}
	
	public void StartGame() {
	   Application.LoadLevel(1);
	}
    
    public void ExitGame() {
        Application.Quit();   
    }
}
