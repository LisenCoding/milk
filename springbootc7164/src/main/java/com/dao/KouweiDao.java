package com.dao;

import com.entity.KouweiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.KouweiVO;
import com.entity.view.KouweiView;


/**
 * 口味
 * 
 * @author 
 * @email 
 * @date 2024-03-30 19:48:39
 */
public interface KouweiDao extends BaseMapper<KouweiEntity> {
	
	List<KouweiVO> selectListVO(@Param("ew") Wrapper<KouweiEntity> wrapper);
	
	KouweiVO selectVO(@Param("ew") Wrapper<KouweiEntity> wrapper);
	
	List<KouweiView> selectListView(@Param("ew") Wrapper<KouweiEntity> wrapper);

	List<KouweiView> selectListView(Pagination page,@Param("ew") Wrapper<KouweiEntity> wrapper);
	
	KouweiView selectView(@Param("ew") Wrapper<KouweiEntity> wrapper);
	

}
