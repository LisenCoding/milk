package com.entity.view;

import com.entity.DiscussdangaoxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 牛奶信息评论表
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-03-30 19:48:40
 */
@TableName("discussdangaoxinxi")
public class DiscussdangaoxinxiView  extends DiscussdangaoxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public DiscussdangaoxinxiView(){
	}
 
 	public DiscussdangaoxinxiView(DiscussdangaoxinxiEntity discussdangaoxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, discussdangaoxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
