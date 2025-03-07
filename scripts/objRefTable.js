const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Touch,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Browser,
		C3.Behaviors.Flash,
		C3.Behaviors.Platform,
		C3.Behaviors.MoveTo,
		C3.Behaviors.bound,
		C3.Behaviors.Bullet,
		C3.Behaviors.solid,
		C3.Plugins.Arr,
		C3.Behaviors.Tween,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Arr.Exps.Back,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Exps.IndexOf,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Arr.Acts.Pop,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{number: 0},
	{no: 0},
	{Sine: 0},
	{TuruncuBalon: 0},
	{TuruncuBalon2: 0},
	{TuruncuBalon3: 0},
	{TuruncuBalon4: 0},
	{pembeBalon: 0},
	{pembeBalon2: 0},
	{pembeBalon3: 0},
	{sariBalon: 0},
	{sariBalon2: 0},
	{sariBalon3: 0},
	{sariBalon4: 0},
	{kapla: 0},
	{btnFullScreen: 0},
	{Touch: 0},
	{Mouse: 0},
	{Audio: 0},
	{Browser: 0},
	{durum: 0},
	{btnSes: 0},
	{btnMuzik: 0},
	{btnBilgi: 0},
	{btnHazirlayanlar: 0},
	{btnKaynakca: 0},
	{btnHome: 0},
	{Flash: 0},
	{btnBasla: 0},
	{btnSol: 0},
	{btnSag: 0},
	{btnOk: 0},
	{gameBackground: 0},
	{Platform: 0},
	{MoveTo: 0},
	{BoundToLayout: 0},
	{yay: 0},
	{Bullet: 0},
	{ok: 0},
	{Solid: 0},
	{solid: 0},
	{solid2: 0},
	{solid3: 0},
	{soruBackground: 0},
	{sorular: 0},
	{sorudiz: 0},
	{btnDogru: 0},
	{btnYanlis: 0},
	{background: 0},
	{bilgi: 0},
	{hazirlayanlar: 0},
	{kaynakca: 0},
	{btncarpi: 0},
	{skorEkran: 0},
	{btnTekrar: 0},
	{bosEnd: 0},
	{BtnButonlar: 0},
	{DY: 0},
	{DY2: 0},
	{yonerge: 0},
	{baslik: 0},
	{butonSayfa: 0},
	{Tween: 0},
	{sugar: 0},
	{kap: 0},
	{Sprite: 0},
	{btnDevam: 0},
	{butonlar: 0},
	{bolns: 0},
	{mor: 0},
	{pembe: 0},
	{sari: 0},
	{soru_tut: 0},
	{dogru_soru: 0},
	{yanlis_soru: 0},
	{morcarp: 0},
	{saricarp: 0},
	{pembecarp: 0},
	{tiklama: 0},
	{patlama: 0}
];

self.InstanceType = {
	TuruncuBalon: class extends self.ISpriteInstance {},
	TuruncuBalon2: class extends self.ISpriteInstance {},
	TuruncuBalon3: class extends self.ISpriteInstance {},
	TuruncuBalon4: class extends self.ISpriteInstance {},
	pembeBalon: class extends self.ISpriteInstance {},
	pembeBalon2: class extends self.ISpriteInstance {},
	pembeBalon3: class extends self.ISpriteInstance {},
	sariBalon: class extends self.ISpriteInstance {},
	sariBalon2: class extends self.ISpriteInstance {},
	sariBalon3: class extends self.ISpriteInstance {},
	sariBalon4: class extends self.ISpriteInstance {},
	btnFullScreen: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	btnSes: class extends self.ISpriteInstance {},
	btnMuzik: class extends self.ISpriteInstance {},
	btnBilgi: class extends self.ISpriteInstance {},
	btnHazirlayanlar: class extends self.ISpriteInstance {},
	btnKaynakca: class extends self.ISpriteInstance {},
	btnHome: class extends self.ISpriteInstance {},
	btnBasla: class extends self.ISpriteInstance {},
	btnSol: class extends self.ISpriteInstance {},
	btnSag: class extends self.ISpriteInstance {},
	btnOk: class extends self.ISpriteInstance {},
	gameBackground: class extends self.ISpriteInstance {},
	yay: class extends self.ISpriteInstance {},
	ok: class extends self.ISpriteInstance {},
	solid: class extends self.ISpriteInstance {},
	solid2: class extends self.ISpriteInstance {},
	solid3: class extends self.ISpriteInstance {},
	soruBackground: class extends self.ISpriteInstance {},
	sorular: class extends self.ISpriteInstance {},
	sorudiz: class extends self.IArrayInstance {},
	btnDogru: class extends self.ISpriteInstance {},
	btnYanlis: class extends self.ISpriteInstance {},
	background: class extends self.ISpriteInstance {},
	bilgi: class extends self.ISpriteInstance {},
	hazirlayanlar: class extends self.ISpriteInstance {},
	kaynakca: class extends self.ISpriteInstance {},
	btncarpi: class extends self.ISpriteInstance {},
	skorEkran: class extends self.ISpriteInstance {},
	btnTekrar: class extends self.ISpriteInstance {},
	bosEnd: class extends self.ISpriteInstance {},
	BtnButonlar: class extends self.ISpriteInstance {},
	DY: class extends self.ISpriteInstance {},
	DY2: class extends self.ISpriteInstance {},
	yonerge: class extends self.ISpriteInstance {},
	baslik: class extends self.ISpriteInstance {},
	butonSayfa: class extends self.ISpriteInstance {},
	sugar: class extends self.ISpriteInstance {},
	kap: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	btnDevam: class extends self.ISpriteInstance {},
	butonlar: class extends self.ISpriteInstance {},
	bolns: class extends self.ISpriteInstance {},
	mor: class extends self.ISpriteInstance {},
	pembe: class extends self.ISpriteInstance {},
	sari: class extends self.ISpriteInstance {}
}