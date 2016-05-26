var Key : GameObject;
var locked_noise : AudioClip;
var open_noise : AudioClip;

private var Range = false;
private var State = 0;  //open = 1, close = 0

public var guiSkin : GUISkin;

function Start () 
{

}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.E) && Range == true && Key.active == false && State == 0)
	{
	    GetComponent.<Animation>().Play("DoorOpen");
        AudioSource.PlayClipAtPoint(open_noise, GetComponent.<Collider>().transform.position);
        State = 1;
	}
    else if(Input.GetKeyDown(KeyCode.E) && Range == true && Key.active == false && State == 1)
    {
        GetComponent.<Animation>().Play("DoorClose");
        AudioSource.PlayClipAtPoint(open_noise, GetComponent.<Collider>().transform.position);
        State = 0;
    } else if(Input.GetKeyDown(KeyCode.E) && Range ==true && Key.active == true && State == 0){
        AudioSource.PlayClipAtPoint(locked_noise, GetComponent.<Collider>().transform.position);
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
	}
    
	if(Key.active && Range)
	{
		GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "You do not have a key");
	}
    
    else
    {
        if(!Key.active && Range && State == 0)
        {
            GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to open <b>door</b>");
        }

        if(!Key.active && Range && State == 1)
        {
            GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to close <b>door</b>");
        }
    }

}