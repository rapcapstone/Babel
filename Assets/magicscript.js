var voice : AudioClip;
var chase : AudioClip;

private var Range = false;

public var guiSkin : GUISkin;
public var playerSource : GameObject;
public var ghoul : GameObject;
public var magicEnabled: boolean;
function Start () 
{
ghoul.SetActive(false);
}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.E) && Range == true)
	{
		playerSource.GetComponent.<AudioSource>().Stop();
		gameObject.GetComponent.<ParticleSystem>().enableEmission = false;
		magicEnabled = true;
        Sounds();
	}
}
function Sounds() {
		AudioSource.PlayClipAtPoint(voice, GetComponent.<Collider>().transform.position);
        yield WaitForSeconds(5);
        playerSource.GetComponent.<AudioSource>().clip = chase;
        playerSource.GetComponent.<AudioSource>().Play();
        if(!ghoul.active) {
       	 ghoul.SetActive(true);
        }
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Range = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Range = false;
	}
}

function OnGUI ()
{
    if (guiSkin != null) {
		GUI.skin = guiSkin;
	} else {
        if(Range)
        {
            GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to disrupt the <b>Magic</b>");
        }

    }

}