var PlayerLamp : GameObject;
var PlayerLampLight : GameObject;
var PlayerLampFlame : GameObject;

private static var refill : float = 25;

private var State = 0;  //Lift/on = 1, Lower/off = 0

//Lamp Oil
private static var Oil : float = 0;
private var CurrentOil : float = 0;
private var OilUsage : float = .5;
private var OilCapacity : float = 100;

private var ShowNotification = false;

public var guiSkin : GUISkin;

function Start () {
    //Initialize lamp oil : 50%
    Oil = .5 * OilCapacity;
    
    //Initialize lamp light : off
    LampOff();
    
    //Lock flame particle rotation.
    //PlayerLampFlame.GetComponent.<ParticleSystem>().transform.eulerAngles.x = 0.388395;
    //PlayerLampFlame.GetComponent.<ParticleSystem>().transform.eulerAngles.z = 0.5908886;
    //PlayerLampFlame.GetComponent.<ParticleSystem>().transform.eulerAngles.z = -0.388395;
}

function Update () {
    CurrentOil = Oil;
    //Checks if there is oil.
    if(Oil > 0)
    {
        //Toggle lamp on/off.
        if (Input.GetKeyDown(KeyCode.F) && State == 0)
        {
            //PlayerLamp.GetComponent.<Animation>().Play("LiftLamp");
            State = 1;
            LampOn();
        }
        else if(Input.GetKeyDown(KeyCode.F) && State == 1)
        {
            //PlayerLamp.GetComponent.<Animation>().Play("LowerLamp");
            State = 0;
            LampOff();
        }
    }
    else if(Oil <= 0)
    {
        Oil = 0;
        State = 0;
        LampOff();
    }
    
    //Burn oil.
    if(State == 1)
    {
        Oil -= Time.deltaTime * OilUsage;
        IntensityDecay();
    }
    
    //Display message when player runs out of oil.
    if(State == 1 && Oil < .01)
    {
        Notification();
    }
}

function LampOn() {
    //Enable lamp light.
    PlayerLampLight.GetComponent.<Light>().range = 4.5;
    //PlayerLampLight.GetComponent.<Light>().intensity = 2.5;
    IntensityDecay();
    PlayerLampFlame.GetComponent.<ParticleSystem>().enableEmission = true;
}

function LampOff() {
    //Disable lamp light.
    PlayerLampLight.GetComponent.<Light>().range = 0;
    PlayerLampLight.GetComponent.<Light>().intensity = 0;
    PlayerLampFlame.GetComponent.<ParticleSystem>().enableEmission = false;
}

function IntensityDecay() {
    //Decay light intensity of player lamp as oil decreases.
    if(Oil < 5)
    {
        PlayerLampLight.GetComponent.<Light>().intensity = .5;
    }
    else if(Oil < 10)
    {
        PlayerLampLight.GetComponent.<Light>().intensity = 1.0;
    }
    else if(Oil < 20)
    {
        PlayerLampLight.GetComponent.<Light>().intensity = 1.5;
    }
    else if(Oil < 30)
    {
        PlayerLampLight.GetComponent.<Light>().intensity = 2.0;
    }
    else
    {
        PlayerLampLight.GetComponent.<Light>().intensity = 2.5;
    }
}

function Notification() {
    //Displays gui label for 2 seconds.
    ShowNotification = true;
    yield WaitForSeconds(3);
    ShowNotification = false;
}

static function AddOil (amount : int)
{
    //Oil = Mathf.Clamp(Oil+refill, 0, 100);
    Oil = Oil+refill;
}

function OnGUI ()
{
	if (ShowNotification)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "You have run out of lamp oil.");
	
	}

}